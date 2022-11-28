interface user {
    family_name:string,
    given_name:string,
    name:string,
    email:string,
    picture:string
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

export  {user,PostI}


