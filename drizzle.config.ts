import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "drizzle-kit";

function getLocalD1DB(): string {
  const d1Dir = ".wrangler/state/v3/d1/miniflare-D1DatabaseObject";
  const files = fs.readdirSync(d1Dir);
  const dbFile = files.find(
    (f) => f.endsWith(".sqlite") && f !== "metadata.sqlite",
  );
  if (!dbFile) throw new Error("No local D1 database found");
  return path.join(d1Dir, dbFile);
}

export default defineConfig({
  schema: "./src/db/schemas/*",
  out: "drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: getLocalD1DB(),
  },
});
