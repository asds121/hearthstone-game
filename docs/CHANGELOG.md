# Changelog

All notable changes to this project are documented in this file.

## [Unreleased] - 2025-12-15

- Enforce `exactOptionalPropertyTypes: true` and resolved resulting type mismatches across the codebase (events, triggers, entities).
- Fixed multiple TypeScript errors and adjusted type signatures for `IEvent`/`GameEvent` and `ITrigger`/`Trigger`.
- Implemented `GameEngine.drawCard(playerId)` to move a player's top card from `DeckZone` to `HandZone`.
- Updated `GameEvent` handling so `target`/`value` behave correctly under strict optional-property checks.
- Added `DeckZone.getCards()`, `DeckZone.toArray()`, `DeckZone.find()` and `DeckZone.filter()` helper methods.
- Made `GameEngine` constructor optionally accept a `gameState` instance for shared state in `GameApplication` and tests.
- Fixed timer-related test leaks by calling `unref()` on setTimeout return handles and synchronizing certain behavior under Jest (`process.env.JEST_WORKER_ID`).
- Fixed Jest config typo (`moduleNameMapping` → `moduleNameMapper`) and enabled `isolatedModules` to satisfy ts-jest diagnostics.
- Added and updated documentation in `docs/API.md` and `README.md` to reflect API/behavior changes.
- All existing tests now pass (100 tests) and `npx tsc --noEmit` reports no errors.

## [Previous]

- Initial project setup and earlier documentation changes.
