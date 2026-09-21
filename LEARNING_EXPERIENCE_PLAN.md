# Puneeth AI Engineering — Learning Experience Plan

## Audit decision
The curriculum map is fixed at **150 lessons** for this release. The editorial problem is no longer lesson count; it is whether each lesson teaches a concrete capability and produces evidence of practice. V8 therefore rewrites the current 150 lesson records instead of adding more topic slots.

## Learning model
**Problem → Learn → Experiment → Build → Break → Prove → Transfer**

- Problem: start with a realistic engineering situation.
- Learn: build the mental model needed to reason about it.
- Experiment: predict, run, observe and vary one controlled factor.
- Build: create the smallest useful implementation.
- Break: introduce a realistic failure or edge case and diagnose it.
- Prove: produce concrete evidence and explain the result.
- Transfer: identify where the capability reappears in a later system.

## Evidence standard
A learner should normally leave a lesson with four pieces of evidence appropriate to the activity: prediction/plan, result, explanation/diagnosis, and transfer/decision. The prompts must be specific to the lesson rather than generic completion language.

## Instructional basis
- Retrieval practice is supported by a substantial literature base, especially when learners must recall rather than only recognize and receive feedback.
- Worked examples are useful for novices, and fading support can move learners toward independent problem solving.
- Deliberate practice emphasizes focused tasks, feedback, problem solving and repeated refinement; it should be applied carefully rather than reduced to a simplistic “more hours = expertise” claim.

## Engineering-content standard
Every authored lesson should answer:
1. What skill is being learned?
2. Where does it appear in a real AI system?
3. What will the learner actually do?
4. What can fail?
5. What evidence demonstrates mastery?
6. Where is the skill reused later?
7. What source/version should be checked when tooling changes?

## Curriculum structure correction
Computer Vision (Phase 05) and Multimodal AI (Phase 12) are treated as optional specializations in the progression engine. They remain available and assessable, but do not block the core AI Engineering sequence. This aligns the actual progression model with the roadmap's core-vs-specialization distinction.

## Next content releases
- V5 Content: NLP Foundations + Transformers Deep Dive + Generative AI + LLMs from Scratch.
- V6 Content: LLM Engineering + RAG Engineering + Multimodal AI specialization + Tools/Protocols.
- V7 Content: Agent Engineering + AI Systems + AI QE + Infrastructure/Production.
- V8 Content: Safety/Responsible AI + Capstones.

Each release should be audited for prerequisites, runnable examples, realistic failure modes, evidence quality, assessment validity, current tooling and transfer to later phases.


## Agent Systems Reference Module

Phase 14 now uses a 10-part agent-systems sequence inspired by the learner-supplied reference visuals: Harness Engineering, Loop Engineering, Context Engineering, Tool Design, Memory Architecture, Orchestration Patterns, Guardrails & Permissions, Evals for Agents, Human-in-the-Loop Design, and Observability & Tracing. Each visual is used as a discussion aid, not as the lesson itself. Learners must reconstruct the design, identify trade-offs, test a failure mode, and produce evidence.

The public site should retain attribution to the source shown in the supplied screenshots (bhawna.io) and clearly distinguish those visuals from original Puneeth AI Engineering diagrams. For future releases, create original diagrams for the same concepts where licensing is uncertain.

## V6 mastery contract

Every lesson now exposes a competency record with:
- difficulty and suggested timebox
- required artifact
- prerequisites
- success criteria
- deliberate failure mode
- review/freshness note where tooling changes quickly

The learner records four evidence fields plus success criteria. This is a **self-reported learning record**, not an automated certification of mastery.

## V6 portfolio loop

Saved lab evidence can be reviewed in the Proof Portfolio and exported as Markdown. This turns learning activity into a reusable engineering record instead of disposable notes.

## V6 visual strategy

Phase 14 contains original Puneeth AI Engineering system diagrams for the ten agent-engineering concepts. Learner-supplied reference screenshots remain contextual references with attribution notes; they are not treated as original artwork.
