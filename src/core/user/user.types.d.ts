export type UserInput = {
  email: any;
  id: string;
  username: string;
  password: string;
  address: string;
};

export type login = {
  email: any;

  password: string;
};

export type User = InferSelectModel<typeof userTable>;
export type data = InferSelectModel<typeof userTable>;
