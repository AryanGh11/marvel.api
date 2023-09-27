export type AvatarType = {
  body: {
    title: string;
    url: string;
  };
};
export type AvatarErrorType =
  | {
      index: number;
      code: number;
      keyPattern: { email: number };
      keyValue: { email: string };
    }
  | any;
