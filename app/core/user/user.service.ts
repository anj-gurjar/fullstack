import { addUser, findAll, findByEmail } from "./user.dao";
import { UserInput } from "./user.types";

export const findAllUsers = async () => {
  const users = await findAll();
  return users;
};

export const add = async (data: UserInput): Promise<any> => {
  const user = await addUser(data);
  if (user) {
    console.log(user);
  } else {
    console.log("error");
  }
  return user;
};

export const login = async (email: string, password: string) => {
  const user = await findByEmail(email);
  if (user) {
    return user;
  }
};
