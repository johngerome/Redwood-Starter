import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schemas/*",
  out: "drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/264ae1415edd7bb5dcbfc231fe1577c26946a4e6015c828e02469015446177ab.sqlite",
  },
});
