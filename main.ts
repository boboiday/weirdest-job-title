import { writeFileSync, mkdirSync } from "node:fs";

const TITLE = "Night Shift Manager, Haunted IKEA Showroom";

if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error("title must be 1-60 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE + "\n", "utf8");
