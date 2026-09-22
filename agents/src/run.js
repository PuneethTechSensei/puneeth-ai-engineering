import { run } from "@openai/agents";
import { orchestratorAgent } from "./agents.js";

const task = process.env.AGENT_TASK?.trim();

if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY.");
  process.exit(1);
}
if (!task) {
  console.error("Missing AGENT_TASK.");
  process.exit(1);
}

const result = await run(orchestratorAgent, task, { maxTurns: 30 });
console.log("\n=== TECHSENSEI AGENT REPORT ===\n");
console.log(result.finalOutput);
