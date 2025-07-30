import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { userTable } from "../core/user/user.schema";

const client = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

// await client.connect();
console.log("Connected to database");

export const db = drizzle({
  logger: true,
  client,
  schema: {
    userTable,
  },
});
