// db/schema.ts
import { pgTable, serial, varchar, text, date } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }),
  email: varchar("email", { length: 255 }),
  password: text("password"),
  address: text("address"),
  dob: date("dob"),
});
