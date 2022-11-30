import React, { useEffect,useState } from "react";
import { PostI, user } from "../../types";
import { useAppSelector,useAppDispatch } from "../../state/hooks";
import { clearUserActual, getDetailPost } from "../../state/reducers/userSlice";
import { useParams, useSearchParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import MasonryLayout from "../MasonryLayout/MasonryLayout";

const Detail = ()=>{
    const userActual:user = useAppSelector((state)=>state.userActual)
    const dispatch = useAppDispatch()
   
   const {id}= useParams()
    const postDetail = useAppSelector((state)=>state.postDetail)

  
  if(!postDetail){
    return(<div>Loading</div>)
  }

  return (
    <>
    <div className="flex justify-center justify-items-center align-middle h-5/6 pt-12">
        <div className=" border-solid border-2 w-1/2 h-5/6 flex justify-center align-middle rounded-xl"><img src={postDetail.post.image} className="h-full w-fit p-2 rounded-xl"></img></div>
        <div className="border-t-solid border-t-2 border-r-solid border-r-2 border-b-solid border-b-2 w-2/5 h-4/6  mt-12 flex flex-col justify-start">
            <div className="flex justify-around mt-6 h-1/3 min-w-full align-middle">
                <div className="flex w-2/4">
                    <img src={postDetail.user.profilePic} className="rounded-full w-20 h-20 m-2"/>
                    <p className="font-semibold mt-8">{postDetail.user.username}</p>
                </div>
                <div className="flex justify-center align-middle w-1/3 "><button className="text-center h-10 w-1/2 mt-6 font-semibold border-2 border-black rounded-xl" >Seguir</button></div>
            </div>
            <div className="mt-12 ml-6 flex  flex-col h-1/2">
                <p>Likes {postDetail.post.likes}</p>
                <p>Descripcion {postDetail.post.description}</p>
            </div>
            
        </div>
    </div>
    <MasonryLayout/>
    </>
  )
}
       


export default Detail