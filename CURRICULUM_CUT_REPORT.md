# Curriculum Cut Report — 2026-09-21

## Decision

The project is intentionally reduced from 200 curriculum slots to **150 focused lessons**.

The rule is capability density, not lesson count.

### Final structure
- 20 phases total
- 17 core phases
- 3 optional specializations: Computer Vision, LLM Internals & Training, Multimodal AI
- 150 lessons total
- Optional phases do not block the core progression

## Phase-by-phase decision

| Phase | Decision | Why |
|---|---|---|
| 00 Setup & Engineering Workflow | Keep, cut orientation lesson, add HTTP/API | “How the roadmap works” belongs in onboarding UI, not a skill lesson. HTTP/API is more transferable for AI applications. |
| 01 Python for AI | Keep, compress | Core Python capability matters; avoid teaching Python as a general CS degree. |
| 02 Data & Math Foundations | Keep, refocus | Add SQL/data preparation; retain only math that supports model reasoning, embeddings, optimization and measurement. |
| 03 ML Foundations | Keep | Baselines, leakage, supervised learning, regularization and error analysis remain high-value foundations. |
| 04 Deep Learning | Keep | PyTorch/autograd/training/debugging are useful prerequisites for understanding modern model behavior. |
| 05 Computer Vision | Optional | Valuable specialization, but not a prerequisite for general AI/LLM engineering. |
| 06 NLP & Representation | Keep, compress | Retain tokenization, classic representations, embeddings, sequence-model intuition and evaluation; do not turn this into a historical NLP survey. |
| 07 Transformers | Keep | This is the architectural bridge into modern LLMs. |
| 08 LLM Foundations & Inference | Keep, refocus | Generation, decoding, context, model choice and failure modes are core. Structured outputs belong primarily in application engineering. |
| 09 LLM Internals & Training | Optional | Training a tiny model is valuable for depth but is not required for most application-oriented AI engineers. |
| 10 LLM Application Engineering | Keep | This is the bridge from models to usable software: instructions, context, validation, APIs, caching, testing and failure handling. |
| 11 RAG Engineering | Keep | RAG is a distinct system pattern requiring ingestion, retrieval, reranking, grounding and evaluation. |
| 12 Multimodal AI | Optional | Important growth area, but it should branch after core language/system skills rather than block them. |
| 13 Tools & Protocols | Keep, compress | Focus on contracts, selection, MCP, authorization, security and failure handling. Avoid protocol trivia. |
| 14 Agent Engineering | Keep intact | The 10 concepts from the supplied reference visuals form a coherent systems module: harness, loop, context, tools, memory, orchestration, guardrails, evals, human oversight and observability. |
| 15 AI Systems & Reliability | Keep | Queues, retries, idempotency, concurrency and partial failure are frequently missing from AI tutorials but matter in real systems. |
| 16 AI Quality Engineering | Keep | Evaluation datasets, trajectory evaluation, regression, safety and release gates are core engineering capabilities. |
| 17 Production & LLMOps | Keep, compress | Serving, containers, CI/CD, telemetry, latency, cost, rollout and recovery are enough for the core. Vendor-specific operations stay out of the core. |
| 18 Security & Responsible AI | Keep | Security is not an optional add-on for tool-using/agentic systems. |
| 19 Capstone & Portfolio | Keep, consolidate | One coherent end-to-end capstone is more valuable than six unrelated mini-projects. |

## Explicit cuts and merges

### Cut: “How the roadmap works” as a lesson
It is now onboarding copy. A learner should spend lesson time on an engineering skill, not site navigation.

### Cut: duplicate prompt-engineering material
Prompt templates are not treated as a standalone bag of tricks. The durable skill is instruction architecture + context engineering + validation.

### Merge: retrieval-related material
Embeddings, chunking and retrieval are introduced in application engineering, then taught deeply in the dedicated RAG phase. This avoids teaching the same concept twice at the same depth.

### Merge: tool concepts
Generic function/tool calling belongs in application engineering; protocol, authorization, MCP and tool security belong in Tools & Protocols.

### Demote: LLM training internals
Tiny-model implementation remains available, but only for learners who want model-level depth.

### Demote: vision and multimodal
Both remain available as first-class optional specializations. They are not removed from the platform; they are removed from the mandatory path.

### Cut: disconnected capstone list
The learner now builds one coherent system and proves it across architecture, implementation, evaluation, security and operations.

## Why this is a stronger curriculum

Current AI engineering practice emphasizes the system surrounding the model: tools, context, feedback loops, evaluation, observability, bounded autonomy and enforceable engineering constraints. OpenAI's 2026 harness engineering work describes tests, repository knowledge, observability, feedback loops and enforceable architecture as central to reliable agentic development. Anthropic describes context engineering as the deliberate curation of the information available to a model across instructions, tools, history, MCP and external data. MLflow's current evaluation guidance treats evaluation datasets, traces, intermediate agent behavior, human feedback and production monitoring as lifecycle capabilities.

The result is a curriculum that prioritizes **software + data + model reasoning + system reliability + evaluation + security** over framework breadth.

## Final rule for future cuts

A lesson survives only if it creates a capability that is:

1. observable;
2. reusable;
3. connected to a later system;
4. worth the learner's time;
5. not better represented by another lesson.

If it fails two or more of those tests, merge or remove it.
