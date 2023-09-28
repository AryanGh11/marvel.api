import { BannerErrorType } from "./index.type";

export default function BannerErrors(error: BannerErrorType) {
  if (error.code === 11000) {
    return "Document already existing";
  }
}
