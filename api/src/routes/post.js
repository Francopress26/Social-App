const { Router} = require('express');
const router = Router();
require('dotenv').config();
const axios = require("axios");
const {Post,User} = require("../db.js")

const API_KEY=process.env.ACCESS_KEY

// https://api.unsplash.com/photos?client_id=BSuAJQo2Cc1kD6O70SS-vXXruKOTnAv9SVXNGhJ9ExA


router.get("", async (req,res) =>{
   try {
    const posts = await Post.findAll()
    res.status(200).send(posts)
   } catch (error) {
      console.log(error)
   }

})


const postUserPhotos= async(page,username)=>{
    const Posts=[]
    try {
        const userPhotos= await axios.get(`https://api.unsplash.com/users/${username}/photos?page=${page}&client_id=${API_KEY}`) 
          console.log(userPhotos.data)
        userPhotos.data?.forEach((photo)=>{
                const {description} =photo
                const image=photo.urls.regular
                const Post ={description,image}
                Posts.push(Post)
            })
        return Posts

    } catch (error) {
        console.log(error)
    }
}



router.post("/posts",async (req,res)=>{
    const username="yunustug"
    // const index=10
      try {
        const user = await User.findOne({where: {username:username}})
       
        for (let index = 0; index < 3; index++) {
          const posts=await postUserPhotos(index,username)
          posts.forEach(async(e)=>{
            const postActual = await Post.create({
              image:e.image,
              description:e.description,
              postedBy:username,
              profilePic:user?.profilePic
            })
            console.log("Actual")
            console.log(postActual)
          })
        }
      
        res.status(200).send("Ok?")

      } catch (error) {
        console.log(error)
      }
     
        

 })

module.exports=router