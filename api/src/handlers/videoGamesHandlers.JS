
const axios = require('axios');
const { Videogame , Genres } = require('../db')


require('dotenv').config();

const { APY_KEY } = process.env;

const URL = 'https://api.rawg.io/api/games';

const getVideoGamesAll = async (req , res) =>{

    try {
        const response = ( await axios.get(`${URL}?key=${APY_KEY}&page_size=100`))
        return res.status(200).json(response.data)
    } catch (error) {
        return res.status(500).send({ message: error.message })
        
    }
}

const getVideoGamesById = async (req , res )=> {
    const { id } = req.params;
    try {
        const response = ( await axios.get(`${URL}/${id}?key=${APY_KEY}`))
        return res.status(200).json(response.data)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

/* https://api.rawg.io/api/games/?key=45d90366324647729ce41da1d7d8295e */

const getVideoGamesByName = async (req , res )=>{
    const { name } = req.query
    try {
        const response = ( await axios.get(`${URL}?search=${name}&key=${APY_KEY}`))
        return res.status(200).json(response.data) 
    } catch (error) {
        return res.status(500).send({ message: error.message })  
    }
}

/* 'https://api.rawg.io/api/games */
/* https://api.rawg.io/api/games?search=grand-theft-auto-v&key=45d90366324647729ce41da1d7d8295e */

const postVideoGame = async (req , res)=> {
    const { name, descripcion, plataformas, imagen, lanzamiento, rating } = req.body;
    try {
     const juegoCreado = await Videogame.create({
        name,
        descripcion,
        plataformas,
        imagen,
        lanzamiento,
        rating
     });
     console.log("creado")
   
     return res.status(200).json(juegoCreado)
        
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}




module.exports = {
    getVideoGamesAll ,
    getVideoGamesById,
    getVideoGamesByName,
    postVideoGame
}


