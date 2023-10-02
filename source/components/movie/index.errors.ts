import { MovieErrorType } from "./index.type";

export default function MovieErrors(error: MovieErrorType) {
  if (error.code === 11000) {
    return "Document already existing";
  }
}
