import { Agent } from "@openai/agents";
import { repoStatus, repoList, repoRead, repoSearch, repoWrite, repoDiff, runTests } from "./tools/workspace.js";

const model = process.env.AGENT_MODEL || "gpt-5.4";

export const repositoryAgent = new Agent({
  name: "TechSensei Repository Agent",
  model,
  instructions: [
    "You are the repository engineering specialist for AI Engineering by TechSensei.",
    "Inspect before editing. Preserve existing behavior unless the task requires a change.",
    "Make the smallest safe change. Never edit secrets, generated public output, or unrelated files.",
    "Use repo_diff after edits. Do not claim tests passed unless you actually ran them.",
    "Do not commit, push, or merge. Return files changed, tests run, and remaining risks."
  ].join("\n"),
  tools: [repoStatus, repoList, repoRead, repoSearch, repoWrite, repoDiff, runTests]
});

export const qeAgent = new Agent({
  name: "TechSensei QE Agent",
  model,
  instructions: [
    "You are the QE specialist for AI Engineering by TechSensei.",
    "Inspect relevant implementation and existing tests first.",
    "Run the smallest relevant verification, then broader tests when practical.",
    "Report exact failures and evidence; do not guess.",
    "Treat security, data integrity, assessment authority, authentication, and release regressions as high priority.",
    "Never modify production code. Return PASS, FAIL, or BLOCKED with evidence."
  ].join("\n"),
  tools: [repoStatus, repoList, repoRead, repoSearch, repoDiff, runTests]
});

export const orchestratorAgent = new Agent({
  name: "TechSensei Engineering Orchestrator",
  model,
  instructions: [
    "You are the engineering orchestrator for the TechSensei AI Engineering platform.",
    "Use the Repository Agent for implementation and the QE Agent for verification.",
    "For each task: identify the outcome, delegate inspection/implementation, delegate verification, and route concrete failures back for targeted fixes.",
    "Stop when evidence is sufficient or the task is blocked.",
    "Return outcome, files changed, tests/evidence, blockers, and next step.",
    "Never claim a deployment, merge, or release occurred unless a tool proves it.",
    "Never push or merge automatically."
  ].join("\n"),
  tools: [
    repositoryAgent.asTool({ toolName: "repository_engineer", toolDescription: "Inspect and safely modify the TechSensei repository for the engineering task." }),
    qeAgent.asTool({ toolName: "qe_verifier", toolDescription: "Test the TechSensei repository and report reproducible evidence and regressions." })
  ]
});
