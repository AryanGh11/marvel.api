export type BannerType = {
  body: {
    title: string;
    url: string;
    category: string;
  };
};
export type BannerErrorType =
  | {
      index: number;
      code: number;
      keyPattern: { email: number };
      keyValue: { email: string };
    }
  | any;
