const { Router } = require("express")

const { getVideoGamesAll ,  getVideoGamesById,
  getVideoGamesByName,
  postVideoGame } = require("../handlers/videoGamesHandlers.JS")

const videogames = Router();

videogames.get("/name", getVideoGamesByName);

videogames.get("/:id", getVideoGamesById);
  

  
  videogames.get("/", getVideoGamesAll );
  
  videogames.post("/", postVideoGame);
  

module.exports = videogames;
