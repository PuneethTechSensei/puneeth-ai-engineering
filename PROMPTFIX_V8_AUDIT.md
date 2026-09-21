# PromptFix V8 — Multi-Level Audit

## Scope
- 20 phases
- 150 current lessons
- 14 public HTML pages
- curriculum data, assessments, glossary, progress gates, local evidence storage and static build output

## Level 1 — Structural integrity
- 20 phases found.
- 150 lesson records exactly match the 150 current curriculum titles.
- No duplicate lesson IDs.
- No lesson has missing required teaching fields.
- 20 assessment sets generated from the current lesson map.
- 53 glossary terms present.
- 10 original Phase 14 diagrams present.

## Level 2 — Lesson/content integrity
Every lesson contains:
- a real engineering problem (`why`)
- a topic-specific mental model (`body`)
- a worked example
- an observable experiment/build task
- a deliberate failure
- a proof artifact/evidence requirement
- transfer to later engineering work
- common mistakes
- references where appropriate

A scan found **zero** uses of the previous generic fallback phrases in the active V8 curriculum.

## Level 3 — Assessment integrity
- Five applied questions per phase.
- Correct answers are distributed across all four option positions.
- Questions are generated from current lesson content rather than stale lesson IDs.
- Pass threshold remains 80%.
- Phase completion additionally requires all lesson evidence and the prerequisite phase to be unlocked.

## Level 4 — UI/learning-flow integrity
The lesson renderer now presents:
1. Why this exists
2. Learn / mental model
3. Worked example
4. Build / experiment
5. Break
6. Engineering lab and evidence record
7. Prove
8. Transfer
9. Common mistakes
10. Further reading

This directly addresses the prior failure mode where a page described a learning process without actually teaching the topic.

## Level 5 — Site integrity
- Static build completed successfully.
- `node --check data.js` passed.
- `node --check app.js` passed.
- Required HTML pages are present in `public/`.
- Required Agent Atlas SVG assets are present.
- No broken local file references were found apart from one intentionally dynamic template URL in `agent-atlas.html`.

## Known limitation
This audit validates structure, content contracts and static rendering inputs. It does **not** claim independent human accreditation, automated correctness of every external API example, or browser screenshot validation. Fast-moving references are intentionally marked for current-documentation checks.
