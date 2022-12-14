import React, { useEffect,useState } from "react";
import { useAppSelector } from "../../state/hooks";
import MasonryLayout from "../MasonryLayout/MasonryLayout";
const Detail = ()=>{
    const postDetail = useAppSelector((state)=>state.postDetail)
    const loading = useAppSelector((state)=>state.loading)
    const image=document.getElementById("image")


    useEffect(() => {
      image?.scrollIntoView()
    },)
  
  if( !postDetail){
    return(<div>Loading</div>)
  }



  return (
    <>
    <div className="flex flex-col mb-6  items-center xl:flex-row bg-gray-200 border-2 border-black">


       <div className="  h-full w-full flex items-center justify-center my-6 ml-6 ">
          <img src={postDetail?.post.image} className="w-4/5 rounded xl:w-full"id="image" ></img>
       </div>


       <div className="bg-gray-100 rounded w-11/12 h-full  m-2 xl:w-2/5 xl:self-start xl:mt-6">
             <div className="flex justify-around mt-6 min-w-full align-middle border-b-2 border-black">
              <div className="flex w-2/4">
                  <img src={postDetail.user.profilePic} className="rounded-full w-20 h-20 m-2"/>
                   <p className="font-semibold mt-8">{postDetail?.user.username}</p>
               </div>
               <div className="flex justify-center align-middle w-1/3 "><button className="text-center h-10 px-2  mt-6 font-semibold border-2 border-black rounded-xl" >Seguir</button></div>
            </div>
            <div className="mt-12 ml-6 flex  flex-col">
                 <p>Likes {postDetail?.post.likes}</p>
                 <p className="h-full w-full">Descripcion {postDetail?.post.description}</p>
             </div>
       </div>


    </div>

    <MasonryLayout/>
    </>
  )
}
       


export default Detail



















  //  <div className="flex justify-center justify-items-center align-middle h-5/6 pt-12 xl:flex-row sm:flex-col ">
  //       <div className=" border-solid border-2 w-1/2 h-5/6 flex justify-center align-middle rounded-xl"><img src={postDetail.post.image} className="h-full w-fit p-2 rounded-xl"></img></div>
        
  //       <div className="border-t-solid border-t-2 border-r-solid border-r-2 border-b-solid border-b-2 w-2/5 h-4/6  mt-12 flex flex-col justify-start">
  //           <div className="flex justify-around mt-6 h-1/3 min-w-full align-middle">
  //               <div className="flex w-2/4">
  //                   <img src={postDetail.user.profilePic} className="rounded-full w-20 h-20 m-2"/>
  //                   <p className="font-semibold mt-8">{postDetail.user.username}</p>
  //               </div>
  //               <div className="flex justify-center align-middle w-1/3 "><button className="text-center h-10 w-1/2 mt-6 font-semibold border-2 border-black rounded-xl" >Seguir</button></div>
  //           </div>
  //           <div className="mt-12 ml-6 flex  flex-col h-1/2">
  //               <p>Likes {postDetail.post.likes}</p>
  //               <p>Descripcion {postDetail.post.description}</p>
  //           </div>


            
  //       </div>
  //   </div>