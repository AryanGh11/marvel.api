import { BackgroundErrorType } from "./index.type";

export default function BackgroundErrors(error: BackgroundErrorType) {
  if (error.code === 11000) {
    return "Document already existing";
  }
}
