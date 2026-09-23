# Content Protection V1 — Lesson Delivery Plan

## Goal

Prevent the authoritative lesson content from being shipped in public browser assets.

This is stronger than crawler blocking. A crawler policy can discourage compliant crawlers, but it cannot protect content that is already present in `data.js`.

## Current finding

`data.js` contains the complete `lessonSpecs` array for all 150 lessons and is loaded directly by `index.html`.

Each lesson currently contains both public metadata and detailed instructional content, including:

- summary / why
- body / mental model
- worked example
- practice
- code
- breakIt
- proof
- transfer
- mistakes
- resources
- engineering lab / experience
- competency
- skillTarget
- guidedSteps
- decision

The browser renderer in `app.js` reads these fields directly through `lessonData(id)`.

Therefore the protection boundary must move from the browser bundle to a server-authorized lesson endpoint.

## Public vs protected split

### Public metadata

Keep only what is needed to browse the curriculum:

- lesson id
- phase id
- phase name
- lesson title
- short description/summary
- optional/core classification
- lesson ordering
- module banner references
- lightweight prerequisite/unlock metadata

### Protected content

Move these fields out of `data.js`:

- why
- body
- example
- code
- practice
- breakIt
- proof
- transfer
- mistakes
- resources
- experience
- competency
- skillTarget
- usedLater
- guidedSteps
- decision

Assessment answer keys remain separately protected and must never be included in public lesson payloads.

## Pilot

Do not migrate all 150 lessons at once.

Pilot with:

- `00-1` — Python runtime & package management
- `00-2` — Git fundamentals & branching
- `00-3` — Command-line & filesystem skills

The pilot must prove the complete path before scaling:

1. public curriculum metadata loads without protected lesson content;
2. authenticated learner requests a lesson;
3. authorization is checked server-side;
4. protected content is returned only after authorization;
5. lesson renderer displays the protected payload;
6. direct unauthenticated requests do not receive the protected payload;
7. browser source/bundle inspection does not reveal the pilot lesson body;
8. repeated/abusive requests have a defined rate-limit path.

## Target architecture

```
Browser
  |
  | public metadata
  v
Static curriculum shell
  |
  | authenticated lesson request
  v
Protected lesson function/API
  |
  +--> authenticate session
  +--> authorize lesson access
  +--> rate-limit request
  |
  v
Appwrite lesson store
  |
  v
Protected lesson JSON
```

The client must not contain Appwrite admin credentials, service-role secrets, or the authoritative lesson dataset.

## Important compatibility constraint

The current site supports learners without an account and currently uses Supabase for optional accounts, while the Appwrite assessment function expects Appwrite authentication.

For the protected-content pilot, do not silently create a second incompatible authentication system.

First define the authentication boundary. The preferred end state is one authoritative learner session that can be validated by the protected lesson service.

## Acceptance criteria

- `data.js` no longer contains the pilot lessons' protected fields.
- A fresh unauthenticated browser request cannot retrieve pilot lesson content.
- An authenticated/authorized request can retrieve the pilot lesson content.
- The lesson page renders normally after protected content is fetched.
- No secret credential is shipped to the browser.
- Existing curriculum browsing remains functional.
- Existing local progress behavior is not broken.
- Security tests cover direct API access, missing authentication, invalid lesson id, and repeated requests.
- Only after the pilot passes should the remaining 147 lessons be migrated.

## Rollout order

1. Define Appwrite lesson table/document schema.
2. Define authenticated lesson retrieval function.
3. Migrate the three pilot lessons.
4. Update lesson renderer to fetch protected content.
5. Remove pilot protected fields from public `data.js`.
6. Add security regression tests.
7. Deploy preview and verify with direct HTTP requests.
8. Expand migration to all 150 lessons.
9. Merge the security PR only after the protected-content boundary is proven.

## Non-goals

- This does not promise that no human can ever copy content from a page they are authorized to view.
- `robots.txt` and `ai.txt` are policy/deterrence signals, not access control.
- User-agent blocking alone is not treated as the security boundary.
