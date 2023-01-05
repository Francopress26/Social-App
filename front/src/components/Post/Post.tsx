import React, { MouseEventHandler, useState,useEffect } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';

import { bdUser, likePut, PostI, user } from '../../types';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { addPostLike, checkLike, clearDetail, getDetailPost, putLiked, putUnliked } from '../../state/reducers/userSlice';

const Post = (post:PostI) => {


  const[liked,setLiked]=useState(post.liked) // Esto deberia ser el estado del reducer
  const [likes,setLikes]=useState(post.likes)
  const navigate = useNavigate();
  const imgClose = " rounded-xl p-2 m-2 border-black"
  const dispatch=useAppDispatch()
  const userActual=useAppSelector((state)=>state.userProfile)
const user1:user = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')|| ""): localStorage.clear()


      const handleLike:MouseEventHandler<HTMLButtonElement>=()=>{
        setLiked(!liked)
        liked ? setLikes(likes-1):setLikes(likes+1)
        dispatch(addPostLike({cant:liked?likes-1:likes+1,id:post.id,username:userActual?.username}))

      !liked ? dispatch(putLiked({email:user1.email,postId:post.id})) : dispatch(putUnliked({email:user1.email,postId:post.id}))
     //falta el dispatch de borrar al usuario del LikedBy del post cada vez q se saca el like
      }

const handleClick:any= ()=>{
  dispatch(clearDetail)
  dispatch(getDetailPost(post.id))
  navigate(`/detail/${post.id}`)
}





  return (
      <div >
        {/* <div className='bg-black min-w-full min-h-full fixed z-50'>Lalala</div> */}
        {/* {modalImg && (
        <div className='bg-black  mb-12 fixed z-50 h-1/4  right-20  w-9/12'>
        <img src={post.image} className="h-full w-2/3  "  onClick={()=>{setModalImg(!modalImg)}} />
        </div>

 )}   */}
        <div className=" relative group">
          <img src={post.image} className={imgClose}  onClick={() =>handleClick() } />
          
         
        {post.description && (        
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 w-14/12 ml-4  h-2/4 bottom-2    bg-black bg-opacity-70 text-white font-semibold text-center">Description: {post.description}</div>
        )}
        
        </div>

      <div className='flex justify-between'>
      <Link to={`/user-profile/${post.postedBy}`} className="flex gap-2 mt-2 items-center">
        <img
          className="ml-4 w-8 h-8 rounded-full object-cover"
          src={post.profilePic}
          alt="user-profile"
        />
        <p className="font-semibold capitalize">{post.postedBy}</p>
      </Link>

      <div className='flex'>   
            {/* post.liked?  */}
           <button onClick={(e)=>handleLike(e)}>{liked?<FcLike className='mr-4 ' size={40}/> :<FcLikePlaceholder className='mr-4 ' size={40}/>}</button>
            <span className='mt-2 mr-2 font-semibold'>{likes}</span>
      </div>
      </div>
     
       
      </div>

      // El liked deberia estar en el post, entonces cuando yo mando a llamar todos los posts, los devuelvo sabiendo si el usuario de la sesión actual tiene puesto el like en el post o no

  );
};

export default Post;