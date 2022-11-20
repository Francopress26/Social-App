const { Router} = require('express');
const router = Router();
require('dotenv').config();
const axios = require("axios");
const {User} = require('../db.js')

const API_KEY=process.env.ACCESS_KEY

const chargeUsers = async ()=>{
    const userNames = [ 
        "yunustug",
        "sunx",
        "dm_david",
        "tama66",
        "kristapsungurs",
        "allisonsaeng",
        "photosbychalo",
        "stteee",
        "fromtinyisles"]

    const users = []
    for (let index = 0; index < userNames.length; index++) {
        const userActual=userNames[index]
        try {
            const{data}=  await axios.get(`https://api.unsplash.com/users/${userActual}/?client_id=${API_KEY}`)

            const {
                username,
                first_name,
                last_name,
                twitter_username,
                location,
                instagram_username,
                bio
            } = data
            const profile_image= data.profile_image.small
          users.push({username,first_name,last_name,twitter_username,location,instagram_username,bio,profile_image})
        } catch (error) {
            console.log(error)
        }
        
    }
    return users
}


router.get("photos/:username", async (req,res)=>{
    const username = req.params.username
    const page=req.query.page

    const Posts=[]
    try {
        const userPhotos= await axios.get(`https://api.unsplash.com/users/${username}/photos?page=${page? page : 1}&client_id=${API_KEY}`) 
            userPhotos.forEach((photo)=>{
                const {created_at,width,height,description} =photo
                const {full,small}=photo.urls
                const Post ={created_at,width,height,description,full,small}
                Posts.push(Post)
            })
        res.status(200).send(Posts)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.post("", async (req,res)=>{
    const users = await chargeUsers()
    try {
        users.forEach( async (user)=>{
            const newUser= await User.create({id:user.id,
                firstName:user.first_name,
                lastName:user.last_name,
                username:user.username,
                biography:user.bio,
                location:user.location,
                profilePic:user.profile_image,
                instagram_username:user.instagram_username,
                twitter_username:user.twitter_username
        })
        })
        res.status(200).send("Ok")
    } catch (error) {
       console.log(error)
        res.send(error)
    }
 

})

router.post("/google", async (req,res)=>{
    //Este es el user q llega x google auth
    // sub:string,
    // family_name:string,
    // given_name:string,
    // name:string,
    // email:string,
    // picture:string
     //falta biography y location q si me llegan de unsplash
    const {family_name,given_name,name,picture,email} = req.body
    try {
        const findUser=await User.findOne({where:{email:email}})

        if(findUser){ 
            return}
        
        const newUser= await User.create({
            firstName:given_name,
            lastName:family_name,
            username:name,
            email:email,
            biography:null,
            location:null,
            profilePic:picture,
            instagram_username:null,
            twitter_username:null
    })
        res.status(200).send(newUser)
    } catch (error) {
        res.status(400).send(error)
    }
   
})


module.exports=router