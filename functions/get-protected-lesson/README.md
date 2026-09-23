# Get Protected Lesson

Authenticated Appwrite Function for protected lesson delivery.

- Requires a valid Supabase learner access token in the Authorization: Bearer … header.
- Supabase URL and publishable key are trusted server-side environment variables.
- Checks the learner's phase unlock in phase_unlocks before protected phases.
- Reads only published rows from protected_lessons_v1.
- Returns Cache-Control: private, no-store.
- Never exposes Appwrite API keys or trusted server configuration to the browser.
- The function is separate from public curriculum metadata.
