import { db } from "../../dashboard/database";
import { userTable } from "./user.schema";
import { eq } from "drizzle-orm";

import { login, User, UserInput } from "./user.types";
import { hash } from "crypto";

export const findAll = async () => {
  return await db.select().from(userTable);
};

export async function findByEmail(
  email: string
): Promise<{ email: string; password: string } | null> {
  const result = await db
    .select({
      email: userTable.email,
      password: userTable.password,
    })
    .from(userTable)
    .where(eq(userTable.email, email))
    .limit(1);

  return {
    email: result[0].email!,
    password: result[0].password!,
  };
}

export const addUser = async (data: {
  username: string;
  email: string;
  password: string;
  address?: string;
  dob?: string;
}) => {
  const hashedPassword = hash(data.password, "10");
  const result = await db
    .insert(userTable)
    .values({
      username: data.username,
      email: data.email,
      password: hashedPassword,
      address: data.address,
      dob: data.dob,
    })
    .returning(); // 👈 required to get inserted row back

  return result[0]; // return inserted user
};
