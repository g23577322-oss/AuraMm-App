# Security Specification for AuraMom

## 1. Data Invariants
- A user can only read and write their own profile document.
- A user can only read and write logs within their own `logs` subcollection.
- `uid` and `userId` fields must match the authenticated user's UID.
- `createdAt` must be a server timestamp on creation and immutable on update.
- Strings like `name` and `mood` must have size limits to prevent abuse.
- `currentWeek` must be within a realistic range (e.g., 4 to 42).
- `waterIntake` must be a non-negative integer.

## 2. The "Dirty Dozen" Payloads (Attacks)
1. **Identity Spoofing**: Attempt to create a profile with a `uid` that doesn't match `request.auth.uid`.
2. **Unauthorized Read**: Attempt to read another user's profile (`/users/other-uid`).
3. **Ghost Field Update**: Attempt to update a user profile with an extra `isVerifiedAdmin: true` field.
4. **Invalid Type**: Attempt to set `waterIntake` to a string "lots".
5. **Timestamp Poisoning**: Attempt to set a custom `createdAt` date in the past.
6. **ID Poisoning**: Attempt to create a log with a document ID that is 1MB long.
7. **Negative Values**: Attempt to set `currentWeek` to -1.
8. **Malicious Notes**: Attempt to save a 5MB string in the `notes` field of a log.
9. **Log Hijacking**: Attempt to create a log in another user's subcollection.
10. **Immutable Field Change**: Attempt to change the `lastPeriodDate` after onboarding (once it's set, it should be controlled).
11. **State Injection**: Attempt to set `onboarded: true` without providing required stats.
12. **Anonymous Access**: Attempting any write without being authenticated.

## 3. Test Runner
(I will implement `firestore.rules.test.ts` after drafting the rules, but for now I'll focus on the rules themselves as requested by the workflow).
