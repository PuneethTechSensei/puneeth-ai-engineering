# Blindspot Audit — Final Curriculum Decision

Date: 2026-09-21

This is the deliberate cut list. The goal is not to maximize lesson count. The goal is to maximize transferable engineering capability per hour.

## Removed or demoted from the core path

### 1. Computer Vision as a mandatory core phase
Moved to optional Phase 05. Vision is valuable, but it is not a prerequisite for building general AI/LLM systems. Keeping it mandatory would force a learner through a specialization before the core agent/LLM stack.

### 2. LLMs from Scratch as mandatory core
Moved to optional Phase 09. A tiny model is excellent for deep understanding, but full training internals are not a prerequisite for most AI application engineering work. The core still teaches Transformer architecture and inference.

### 3. Multimodal AI as a mandatory core phase
Moved to optional Phase 12. It is increasingly important, but it should branch after the core LLM/RAG/tool foundations.

### 4. Repeated generic prompt-engineering topics
Reduced repetition between Generative AI and LLM Application Engineering. Prompting is taught as instruction architecture and context engineering, not as a collection of prompt tricks. Anthropic's current guidance treats context engineering as a broader problem of curating the information available to the model, which is more durable than memorizing prompt templates.

### 5. Duplicate RAG material
RAG architecture, ingestion, chunking, retrieval, reranking, grounding and evaluation remain in one dedicated phase. LLM Application Engineering keeps only the prerequisite application-level concepts.

### 6. Duplicate observability material
Agent observability is taught in Phase 14; production observability and tracing are taught as operations in Phase 17. The distinction is intentional: understand an agent trace first, then operate a service at scale.

### 7. Capstone fragmentation
The old list of disconnected capstone projects is replaced by one end-to-end capstone process. Learners choose a project type, but all must demonstrate problem definition, architecture, implementation, evaluation, security, operational readiness and technical defense.

### 8. “Advanced model work” as a core requirement
Fine-tuning, PEFT/LoRA, quantization and research reproduction remain valuable advanced topics but are no longer presented as prerequisites for the core AI Engineer path.

## Blind spots now explicitly covered

- SQL/data work
- data quality and measurement
- software testing
- context engineering
- tool contracts and authorization
- idempotency and partial failure
- evaluation datasets and regression
- evaluation validity: reward hacking, contamination and broken test cases
- outcome vs trajectory evaluation
- supply-chain and tool security
- excessive agency / least privilege
- cost controls
- rollback and recovery
- technical documentation and reproducibility

## What we intentionally do NOT teach deeply in the core

- training frontier-scale models from scratch
- every cloud provider
- every agent framework
- every vector database
- every prompt framework
- every observability vendor
- advanced computer vision
- advanced multimodal research
- deep distributed-systems theory beyond what AI systems require

The curriculum should teach transferable concepts and one practical implementation path, then teach the learner how to read current documentation and adapt.

## Evidence behind the cuts

Current AI engineering guidance emphasizes harnesses, tools, context, feedback loops, evaluation, observability and controlled autonomy rather than framework memorization. OpenAI's 2026 harness engineering report describes repository knowledge, tests, observability, feedback loops and enforceable architecture as key to agent reliability. MLflow's current evaluation guidance treats evaluation datasets, traces, intermediate agent behavior, human feedback and production monitoring as core lifecycle practices.

## Final rule

If a lesson cannot answer “What can the learner do after this that they could not do before?”, it should be cut, merged or rewritten.
