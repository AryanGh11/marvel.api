import MovieModel from "./index.model";

export default async function GetMovie(req: any, res: any) {
  const movie = await MovieModel();
  movie
    .find({})
    .then((movies: any) => {
      res.send(movies);
    })
    .catch((err: any) => {
      console.error(err);
    });
}
