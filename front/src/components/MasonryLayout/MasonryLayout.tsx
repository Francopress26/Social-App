import React, { JSXElementConstructor } from "react";
import Masonry from 'react-masonry-css'
import { useAppSelector } from "../../state/hooks";
import { PostI } from "../../types";
import Post from '../Post/Post'

const breakpointObj={
    default:4,
    3000:6,
    2000:5,
    1200:3,
    1000:2,
    500:1,
}



const MasonryLayout=()=>{
    const posts:PostI[]  = useAppSelector((state)=>state.posts)
    return (
        <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
            {posts?.map((post)=><Post id={post.id} image={post.image} description={post.description} postedBy={post.postedBy} likes={post.likes}/>)}
        </Masonry>
    )
}

export default MasonryLayout