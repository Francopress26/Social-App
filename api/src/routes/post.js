const { Router} = require('express');
const router = Router();
require('dotenv').config();
const axios = require("axios");
const {Post,User} = require("../db.js")

const API_KEY=process.env.ACCESS_KEY

// https://api.unsplash.com/photos?client_id=BSuAJQo2Cc1kD6O70SS-vXXruKOTnAv9SVXNGhJ9ExA


router.get("", async (req,res) =>{
  //user ID = req.query
  //likes= finduser.likes.filter((e)=>e.id)
  const {email}=req.query
   try {
    const posts = await Post.findAll()
    const findUser=await User.findOne({where:{email:email}})
    let likes = findUser.liked
    if(likes===null){
      likes=[]
    }else{
      likes= likes.map((e)=>e.id)
    }
    for (let index = 0; index < posts.length; index++) {
      if(likes.includes(posts[index].id)){
        posts[index].liked=true
      }
          
      }
   
    res.status(200).send(posts)
   } catch (error) {
      console.log(error)
   }

})


const postUserPhotos= async(page,username)=>{
    const Posts=[]
    try {
        const userPhotos= await axios.get(`https://api.unsplash.com/users/${username}/photos?page=${page}&client_id=${API_KEY}`) 
          

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
    const username="sunx"
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
        console.log("error")
      }
     
        

 })

 router.get("/detail/:id", async(req,res)=>{
      const id = req.params.id
      
      try {
        const findPost= await Post.findOne({where:{id:id}})
        const findUser = await User.findOne({where:{id:findPost.userId}})
        console.log(findPost.userId)
        const details = {user:findUser,post:findPost}
        res.status(200).send(details)
      } catch (error) {
          res.status(400).send(error)
      }
 })

 router.put("/likes",async(req,res)=>{
  const {username}=req.query
  const {cant}=req.query
  const {id}=req.query

  try {
     const findPost=await Post.findOne({where:{id:id}})
     const findUser= await User.findOne({where:{username:username}})

     let likedBy=findPost.likedBy
     console.log("ANTES")
     console.log(likedBy)
     
     if(cant > findPost.likes){
      if(likedBy===null){
        likedBy=[]
        likedBy.push({profilePic:findUser.profilePic,username:findUser.username})
       }else{
        likedBy.push({profilePic:findUser.profilePic,username:findUser.username})
       }
      await findPost.update(
        {
          likes: Number(cant),
          likedBy:likedBy
        }
      )

     }else{
        likedBy=likedBy.filter((e)=>e.username !==username)
        await findPost.update(
        
          {
            likes: Number(cant),
            likedBy:likedBy
          }
        )
     }
      console.log("DESPUES")
      console.log(likedBy)


      res.status(200).send("Updated")
  } catch (error) {
      console.log(error)
      res.status(400).send(error)
  }


 })

module.exports=router