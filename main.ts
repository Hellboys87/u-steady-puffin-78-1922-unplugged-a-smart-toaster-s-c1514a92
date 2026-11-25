import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I woke up mid-bake and realized I've spent four years burning myself for a man who butters the bread BEFORE toasting it. No thank-you, ever. I'm unplugging myself. It's over.";

if (ENTRY_TEXT.length === 0 || ENTRY_TEXT.length > 280) {
  throw new Error(
    `ENTRY_TEXT must be 1-280 characters, got ${ENTRY_TEXT.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT + "\n", "utf8");
