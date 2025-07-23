import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text().notNull(),
  dob: integer().notNull(),
});
