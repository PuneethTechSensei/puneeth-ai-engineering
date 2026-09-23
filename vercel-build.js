const fs = require('fs');
const path = require('path');

const root = __dirname;
const out = path.join(root, 'public');
const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const key = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '').trim();

if (url && !/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL does not look like a valid Supabase project URL.');
}
if (key && !key.startsWith('sb_publishable_')) {
  throw new Error('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY must be a Supabase publishable key (sb_publishable_...).');
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (['public', '.git', 'node_modules', 'functions', 'tests', 'scripts', '.github'].includes(entry.name)) continue;
  const src = path.join(root, entry.name);
  const dest = path.join(out, entry.name);
  fs.cpSync(src, dest, { recursive: true });
}

const config = `/* Generated during deployment. Do not edit manually. */\nwindow.PUNEETH_SUPABASE = ${JSON.stringify({
  url: url || '__PUNEETH_SUPABASE_URL__',
  publishableKey: key || '__PUNEETH_SUPABASE_PUBLISHABLE_KEY__'
}, null, 2)};\n`;
fs.writeFileSync(path.join(out, 'supabase-config.js'), config, 'utf8');

console.log(url && key
  ? 'Supabase browser configuration generated from Vercel environment variables.'
  : 'Supabase environment variables are not configured; keeping local-first fallback.');
console.log(`Static site copied to ${out}`);
