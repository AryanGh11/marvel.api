export type BackgroundType = {
  body: {
    title: string;
    url: string;
  };
};
export type BackgroundErrorType =
  | {
      index: number;
      code: number;
      keyPattern: { email: number };
      keyValue: { email: string };
    }
  | any;
