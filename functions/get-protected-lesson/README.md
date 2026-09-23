# Get Protected Lesson

Authenticated Appwrite Function for protected lesson delivery.

- Requires an Appwrite user JWT.
- Reads only published rows from protected_lessons_v1.
- Returns Cache-Control: private, no-store.
- Never exposes Appwrite API keys to the browser.

The function is separate from public curriculum metadata.
