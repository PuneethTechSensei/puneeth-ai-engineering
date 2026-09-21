# Appwrite practice/quiz backend

The repository currently uses Supabase for its existing optional learner account/progress system. This Appwrite adapter is isolated so the quiz can use Appwrite without exposing a server API key in browser code.

## TablesDB schema

### practice_questions
Seed this table from a trusted server-side script or Appwrite Function. Do not grant client CREATE/UPDATE/DELETE permissions.

- questionId: varchar(64), required, indexed
- quizId: varchar(64), required, indexed
- phaseId: varchar(8), required, indexed
- topic: varchar(160), required
- questionText: text, required
- optionsJson: text, required
- answerIndex: integer, required
- explanation: text, required
- latex: text, optional
- version: varchar(32), required

### quiz_attempts
Enable Row Security. Grant CREATE to authenticated users, but do not grant broad READ/UPDATE/DELETE. Each created row gets owner-only permissions.

- userId: varchar(64), required, indexed
- quizId: varchar(64), required, indexed
- phaseId: varchar(8), required
- topic: varchar(160), required
- score: integer, required
- maxScore: integer, required
- elapsedSeconds: integer, required
- answersJson: text, required
- completedAt: datetime, required

For authoritative scoring, evaluate answers inside an Appwrite Function rather than trusting a browser-supplied score. The client adapter is intended for learner-owned attempt telemetry.

## Security

Never put an Appwrite API key in appwrite-config.js or any browser bundle. The Web SDK uses the project ID and authenticated session; server-side database administration belongs in an Appwrite Function.