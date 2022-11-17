const { Router} = require('express');
const router = Router();
require('dotenv').config();
const axios = require("axios");

const API_KEY=process.env.ACCESS_KEY

router.get("photos/:username", async (req,res)=>{
    const username = req.params.username

    const userPhotos= await axios.get(`https://api.unsplash.com/users/${username}/photos?client_id=${API_KEY}`)
})

module.exports=router