export type UserType = {
  body: {
    name?: string;
    username?: string;
    image?: string;
    email?: string;
    password?: string;
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
