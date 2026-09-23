import fs from "node:fs";
import assert from "node:assert/strict";

const read = file => fs.readFileSync(file, "utf8");
const mustExist = file => assert.ok(fs.existsSync(file), "Missing " + file);

mustExist("data.js");
mustExist("app.js");
mustExist("auth.js");
mustExist("appwrite.js");
mustExist("practice.js");
mustExist("portfolio.js");
mustExist("functions/submit-assessment/src/main.js");
mustExist("functions/submit-assessment/src/curriculum.js");
mustExist("functions/get-protected-lesson/src/main.js");
mustExist("vercel-build.js");

const data = read("data.js");
assert.equal((data.match(/const lessonSpecs\s*=\s*/g) || []).length, 1);
assert.ok(!/const\s+assessments\s*=|function\s+buildAppliedAssessments/.test(data));
assert.ok(!/(["'])(why|body|example|code|practice|breakIt|proof|transfer|mistakes|resources|experience|competency|skillTarget|usedLater|guidedSteps|decision|takeaways)\1\s*:/.test(data), "Protected lesson field leaked into data.js");
assert.ok(!/answerIndex|\.answer\b/.test(data), "Assessment answer data leaked into data.js");

const rhs = data.slice(data.indexOf("const lessonSpecs = ") + "const lessonSpecs = ".length, data.indexOf(";\n\nconst optionalPhases"));
const lessonSpecs = Function("return " + rhs)();
assert.equal(lessonSpecs.length, 150, "Expected 150 public lesson metadata records");
const allowed = new Set(["id","phase","phaseName","title","summary","originalVisual"]);
for (const lesson of lessonSpecs) {
  assert.ok(lesson.id && /^\d{2}-\d{1,3}$/.test(lesson.id), "Invalid lesson metadata id");
  for (const key of Object.keys(lesson)) assert.ok(allowed.has(key), "Unexpected public lesson field: " + key);
}

assert.ok(!fs.existsSync("practice-data.js"), "Old browser practice dataset still exists");

const app = read("app.js");
assert.ok(app.includes("getProtectedLesson"), "Lesson renderer is not wired to protected delivery");
assert.ok(app.includes("submitQuiz"), "Assessment renderer is not wired to server scoring");
assert.ok(!/q\.(answer)|Number\(el\.value\)===q\.answer|assessments\[id\]/.test(app), "Browser still owns assessment scoring");
assert.ok(!/onchange=.*getProgress\(\).*saveProgress/.test(app), "Browser still owns lesson completion");
assert.ok(app.includes("__PUNEETH_APP_READY__"), "App readiness signal missing");

const appwrite = read("appwrite.js");
assert.ok(!/TablesDB/.test(appwrite), "Client still exposes direct Appwrite table access");
assert.ok(!/x-supabase-url|x-supabase-publishable-key/.test(appwrite), "Client is still supplying trusted Supabase server configuration");

const protectedFn = read("functions/get-protected-lesson/src/main.js");
assert.ok(protectedFn.includes("SUPABASE_URL"));
assert.ok(protectedFn.includes("SUPABASE_PUBLISHABLE_KEY"));
assert.ok(protectedFn.includes("phase_unlocks"));
assert.ok(!/x-supabase-url|x-supabase-publishable-key/.test(protectedFn), "Protected lesson function trusts client Supabase configuration");

const gateFn = read("functions/submit-assessment/src/main.js");
for (const marker of ["SUPABASE_URL","SUPABASE_PUBLISHABLE_KEY","PASS_PERCENT","practice_questions","practice_answer_keys","phase_unlocks","learner_progress","lesson_evidence","quiz_attempts"]) {
  assert.ok(gateFn.includes(marker), "Learner gate missing " + marker);
}
assert.ok(/stableId/.test(gateFn), "Learner gate IDs are not deterministic");
assert.ok(/response\(res,.*result/.test(gateFn), "Learner gate response path missing");

const build = read("vercel-build.js");
assert.ok(build.includes("'functions'"));
assert.ok(build.includes("'tests'"));
assert.ok(build.includes("'scripts'"));
assert.ok(!read("functions/submit-assessment/src/main.js").includes("x-supabase-url"));
assert.ok(!read("functions/get-protected-lesson/src/main.js").includes("x-supabase-url"));
assert.ok(read("functions/submit-assessment/src/main.js").includes('import sdk from "node-appwrite";'));
assert.ok(read("functions/get-protected-lesson/src/main.js").includes('import sdk from "node-appwrite";'));

const pages = ["about.html","account.html","agent-atlas.html","assessment.html","creator.html","curriculum.html","dashboard.html","glossary.html","index.html","lesson.html","paths.html","portfolio.html","privacy.html","roadmap.html"];
for (const page of pages) {
  const html = read(page);
  const positions = ["auth.js","appwrite.js","data.js","app.js"].map(x => html.indexOf(x));
  assert.ok(positions.every(i => i >= 0), page + " missing runtime script");
  assert.ok(positions[0] < positions[1] && positions[1] < positions[2] && positions[2] < positions[3], page + " script order is unsafe");
}
assert.ok(read("assessment.html").indexOf("practice.js") > read("assessment.html").indexOf("app.js"));
assert.ok(read("portfolio.html").indexOf("portfolio.js") > read("portfolio.html").indexOf("app.js"));
assert.ok(read("account.html").indexOf("account.js") > read("account.html").indexOf("auth.js"));
assert.ok(!fs.existsSync("public/practice-data.js"), "Deleted practice dataset was regenerated");

if (fs.existsSync("public/data.js")) {
  const built = read("public/data.js");
  assert.ok(!/answerIndex|\.answer\b/.test(built));
  assert.ok(!fs.existsSync("public/functions"), "Server source copied into Vercel public output");
}

console.log("Security audit passed.");
