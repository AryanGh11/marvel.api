import { UserErrorType } from "./index.type";

export default function UserErrors(error: UserErrorType) {
  if (error.code === 11000) {
    return "Document already existing";
  }
}
