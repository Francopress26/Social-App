import React from "react";
import { PostI } from "../../types";


const Detail = (post:PostI)=>{
        return(
            <div>
                    <h1>Detail</h1>
                    <img src={post.image}></img>
            </div>
        )
}

export default Detail