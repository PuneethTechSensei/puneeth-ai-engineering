# TechSensei Agent System

The first multi-agent engineering layer for AI Engineering by TechSensei.

## Agents
- Engineering Orchestrator — coordinates specialist work.
- Repository Agent — inspects and safely changes repository files.
- QE Agent — verifies changes and reports evidence.

## Safety
Agents run against a checked-out workspace. They do not push or merge automatically.
Repository writes are blocked unless the workflow explicitly enables them.

## Local setup
cd agents
npm install
export OPENAI_API_KEY="your-key"
export AGENT_TASK="Audit the current Release 1.0 assessment flow"
npm run agent
