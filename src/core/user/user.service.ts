import { findAll } from "./user.dao";

export const findAllUsers = async () => {
  const users = await findAll();
  return users;
};
