import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/app/core/**/*.schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://aham:admin@localhost:5433/bigbag",
  },
});
