// Worst Fix Ever: Funniest Commit Message.
// Writes one commit message (at most 100 characters) to /output/entry.txt.
// The line is a fixed, deterministic string: the program takes no input,
// reads no other file, and writes the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE = "fix: typo in README, deleted production database instead";

// Enforce the competition gate before writing: 1-100 characters, not
// only whitespace. The entry is fixed, so this never trips in practice;
// it exists so a future edit cannot silently ship an invalid entry.
if (MESSAGE.length < 1 || MESSAGE.length > 100 || MESSAGE.trim().length === 0) {
  throw new Error(`entry must be 1-100 non-blank characters, got ${MESSAGE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
