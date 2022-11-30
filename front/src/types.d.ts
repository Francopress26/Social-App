interface user {
    id?:string,
    family_name:string,
    given_name:string,
    name:string,
    email:string,
    picture:string
}

interface bdUser{
    biography:string,
    email:string,
    firstName:string,
    followed:[],
    followers:[],
    id:string, 
    instagram_username:string,
    lastName:string,
    location:string,
    profilePic:string,
    twitter_username:string,
    updatedAt:string,
    username:string
}

interface PostI{
    id:string,
    image:string,
    description:string,
    likes:number,
    postedBy:string,
    profilePic:string,
    className?:string
}

export  {user,PostI,bdUser}


