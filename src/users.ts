import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  if (!Array.isArray(apiResponse)) {
    return [];
  }

  const users: User[] = [];

  for (const item of apiResponse) {
    const parsed = parseUser(item);
    if (parsed) {
      users.push(parsed);
    }
  }

  return users;
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}

function parseUser(value: unknown): User | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const record = value as { name?: unknown; age?: unknown };

  if (typeof record.name !== "string") {
    return null;
  }

  const age = parseAge(record.age);
  if (age === null) {
    return null;
  }

  return { name: record.name, age };
}

function parseAge(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}