import { userTable } from "./user.schema";
import { db } from "../../database";

export const findAll = async () => {
  return await db.select().from(userTable);
};
