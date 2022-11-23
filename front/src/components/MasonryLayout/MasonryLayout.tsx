import React, { JSXElementConstructor } from "react";
import Masonry from 'react-masonry-css'
import { PostInterface } from "../../types";
import Post from '../Post/Post'

const breakpointObj={
    default:4,
    3000:6,
    2000:5,
    1200:3,
    1000:2,
    500:1,
}



const MasonryLayout=(posts:PostInterface[])=>{
   


    return (
        <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
            {/* {posts?.map((post)=><Post  id={post.id} image={post.image} className='w-max'/>)} */}
        </Masonry>
    )
}

export default MasonryLayout