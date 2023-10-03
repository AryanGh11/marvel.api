const axios = require("axios");
import MovieErrors from "./index.errors";
import MovieModel from "./index.model";
import { MovieType } from "./index.type";

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default async function Movies(req: MovieType, res: any) {
  const name = req.body.Title;
  const trailer = req.body.Trailer;

  const apiUrl = `http://www.omdbapi.com/?apikey=7524a60b&t=${name}`;
  try {
    //Get data from API
    const response = await axios.get(apiUrl);
    const data = response.data;
    if (data.Error) {
      res.send("Not found");
    } else {
      try {
        //Post data in databse
        const MovieModelInstance = await MovieModel();
        const newMovie = new MovieModelInstance({
          name: data.Title,
          year: data.Year,
          director: data.Director,
          actors: data.Actors,
          time: data.Runtime,
          genre: data.Genre,
          plot: data.Plot,
          language: data.Language,
          country: data.Country,
          poster: data.Poster,
          imdb_rating: data.imdbRating,
          imdb_votes: data.imdbVotes,
          imdb_id: data.imdbID,
          trailer: trailer,
        });
        await newMovie.save();
        res.send("Movie added successfully");
      } catch (err) {
        const error = MovieErrors(err);
        res.send(error);
      }
    }
  } catch (err) {
    res.send(err);
  }
}
