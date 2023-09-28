export type UserType = {
  body: {
    name?: string;
    username?: string;
    bio?: string;
    phone_number?: string;
    email?: string;
    password?: string;
    avatar?: string;
  };
};
export type UserErrorType =
  | {
      index: number;
      code: number;
      keyPattern: { email: number };
      keyValue: { email: string };
    }
  | any;
