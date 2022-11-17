const { Router} = require('express');
const router = Router();
require('dotenv').config();
const axios = require("axios");

const API_KEY=process.env.ACCESS_KEY

router.get("", async (req,res) =>{
    const page = req.query.page
    
    const response = await axios.get(`https://api.unsplash.com/photos/?page=${page ? page : 1}&client_id=${API_KEY}`)

    console.log(response.data)
     res.json(response.data)
})

module.exports=router