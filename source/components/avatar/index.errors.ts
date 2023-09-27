import { AvatarErrorType } from "./index.type";

export default function AvatarErrors(error: AvatarErrorType) {
  if (error.code === 11000) {
    return "Document already existing";
  }
}
