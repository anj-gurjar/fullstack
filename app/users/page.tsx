import { findAllUsers } from "@core/user/user.service";
import UserList from "./UserList";

export default async function UsersPage() {
  console.log(findAllUsers());
  const data = [{
    id: 0,
    firstname: "John",
    lastname: "Doe",
  }];
  return <UserList data={data} />;
}
