const axios = require("axios");

export default async function fetchData(req: any, res: any) {
  const movieName = req.body.url;
  const apiUrl = `http://www.omdbapi.com/?apikey=7524a60b&t=${movieName}`;
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
