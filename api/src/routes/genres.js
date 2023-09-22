const { Router } = require("express")


const genres = Router();

genres.get("/", (req, res) => {
    res.send("Estoy en la ruta, genres");
  });
  

  

module.exports = genres;
