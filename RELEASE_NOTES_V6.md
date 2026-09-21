# Puneeth AI Engineering — V6 Deep Upgrade

## What changed

### Learning engine
- Added competency metadata: level, timebox, artifact, prerequisites, success criteria, failure mode and freshness notes.
- Upgraded lab completion from text-only evidence to evidence + explicit success criteria + optional artifact.
- Clearly labels evidence as self-reported rather than independently verified.
- Added a local-first Proof Portfolio with Markdown export.

### Curriculum
- All 200 lessons now have detailed content and an engineering-experience record.
- Phases 06–12 were expanded with phase-specific tasks covering NLP, Transformers, Generative AI, LLMs from Scratch, LLM Engineering, RAG and Multimodal AI.
- Phases 13 and 15–19 were expanded with tool/protocol, AI systems, AI QE, production, security and capstone tasks.
- Phase 14 remains the reference-quality agent-engineering module.

### Agent Engineering
- Added original diagrams for Harness, Loop, Context, Tool Design, Memory, Orchestration, Guardrails, Evals, Human-in-the-Loop and Observability.
- Added Agent Systems Atlas page.
- Preserved supplied screenshots as contextual references with attribution notes.

### Content freshness
- Added current references for MCP 2026-07-28, agent evaluation, OpenTelemetry GenAI observability, OWASP agentic/MCP risks and NIST AI RMF.

## Verification

- `node --check app.js` — pass
- `node --check data.js` — pass
- Vercel static build — pass
- 20 phases — pass
- 200 lessons — pass
- 200 detailed lesson records — pass
- 200 learning experience records — pass
- 10 original Agent Systems diagrams — pass
- Main pages return HTTP 200 from a local static server — pass

## Important before production

- Review third-party/reference images for redistribution rights before publishing them publicly.
- Perform human editorial review of all newly expanded lessons before describing the curriculum as fully production-reviewed.
- Pin tool/library versions inside runnable projects where reproducibility matters.

### Assessment engine
- Phases 06–19 now use 10-question scenario-based assessments rather than relying on the older 5-question definition checks.
- Answer positions are deliberately mixed to avoid answer-position gaming.
- Passing remains 80%, but phase completion still requires all lesson evidence gates.
