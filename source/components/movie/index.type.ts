export type MovieType = {
  body: {
    Title: string;
    Year: string;
    Director: string;
    Actors: string;
    Runtime: string;
    Genre: string;
    Plot: string;
    Language: string;
    Country: string;
    Poster: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Trailer?: string;
  };
};
export type MovieErrorType =
  | {
      index: number;
      code: number;
      keyPattern: { email: number };
      keyValue: { email: string };
    }
  | any;
