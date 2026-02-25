[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/g6hbzgmu)
# CSC309 Winter 2026 Week 7 Tutorial

## TypeScript: Compile-Time vs Runtime

In this tutorial, you will fix unsafe TypeScript code.

Your goal is to make the project:

* Pass TypeScript compilation
* Pass all tests
* Handle invalid runtime data safely

---

## What You Must Do

You may only modify:

```
src/users.ts
```

Do **not** modify:

```
src/types.ts
test/users.test.ts
```

---

## Requirements

Your submission must:

1. Pass type checking:

```
npm run typecheck
```

2. Pass all tests:

```
npm test
```

---

## Important

* The API response contains invalid data.
* `age` may be a string (e.g., `"24"`).
* You must safely handle this at runtime.
* Do NOT use `as User[]` to bypass type checking.
* Your code must not throw runtime errors.

---

## Running Locally

Install dependencies:

```
npm install
```

Then run:

```
npm run typecheck
npm test
```

---

Submit your solution by pushing to GitHub.

Good luck!
