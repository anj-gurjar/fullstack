import { drizzle } from "drizzle-orm/node-postgres";
import { connectToDb } from "./utils/database";

export const db = drizzle(process.env.DATABASE_URL!);
 connectToDb()
