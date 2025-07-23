import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const client = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

// await client.connect();
console.log("Connected to database");

export const db = drizzle({
  logger: true,
  client,
});
