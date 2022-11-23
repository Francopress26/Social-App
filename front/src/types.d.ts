interface user {
    family_name:string,
    given_name:string,
    name:string,
    email:string,
    picture:string
}

interface Post{
    id:string,
    image:string,
    description:string,
    likes:number,
    postedBy:string
}

interface PostInterface {
    id:string,
    image:string,
    postedBy:string,
    description:string,
    likes:number
}

interface PostsInterface extends Array<PostInterface>{}

export  {user,Post,PostInterface,PostsInterface}


