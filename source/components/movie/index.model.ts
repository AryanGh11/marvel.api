import MovieErrors from "./index.errors";

const mongoose = require("mongoose");

/**
 * @description This function will create a new document in User model
 * @example 
 * const UserModelInstance = await UserModel();
  try {
    const newUser = new UserModelInstance({
      title: title,
      url: url,
    });

    await newUser.save();

    console.log("User created successfully");
    res.send("User created successfully");
  } catch (err) {
    console.error(err);
    res.send(err);
  }
 * @returns Create and save new document in User model or catch the error
 */
export default async function MovieModel() {
  mongoose.connect(
    "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const modelName = "movie";

  try {
    const existingModel = mongoose.modelNames().includes(modelName);
    const MovieModel = existingModel
      ? mongoose.model(modelName)
      : mongoose.model(
          modelName,
          new mongoose.Schema({
            name: { type: String, unique: true },
            year: { type: String },
            director: { type: String },
            actors: { type: String },
            time: { type: String },
            genre: { type: String },
            plot: { type: String },
            language: { type: String },
            country: { type: String },
            poster: { type: String },
            imdb_rating: { type: String },
            imdb_votes: { type: String },
            imdb_id: { type: String, unique: true },
          })
        );
    return MovieModel;
  } catch (err: any) {
    console.log(err);
    const error = MovieErrors(err);
    throw error;
  }
}
