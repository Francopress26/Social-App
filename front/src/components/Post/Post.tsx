import React, { MouseEventHandler, useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { PostI, user } from '../../types';
import logo from '../../assets/download.svg'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import Detail from '../Detail/Detail';
import { useAppDispatch } from '../../state/hooks';
import { getDetailPost } from '../../state/reducers/userSlice';

const Post = (post:PostI) => {
  const [savingPost, setSavingPost] = useState(false);
  const[liked,setLiked]=useState(false)
  const [likes,setLikes]=useState(post.likes)
  const navigate = useNavigate();
  const [modalImg, setModalImg]=useState(false)
const imgClose = " rounded-xl p-2 m-2 border-black"

// const imgOpen = 'bg-black w-1/2 h-min fixed fixed z-50 aspect-square'

const user1:user = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')|| ""): localStorage.clear()


const handleLike:MouseEventHandler<HTMLButtonElement>=()=>{
setLiked(!liked)
liked ?setLikes(likes-1):setLikes(likes+1)
//Dispatch put likes (likes)
//Dispatch put de likes en el usuario(post)
}
const dispatch=useAppDispatch()


const handleClick:any= ()=>{
  dispatch(getDetailPost(post.id))
  navigate(`/detail/${post.id}`)
}


//Un use effect cada vez que se monte el post que busque si el usuario likeo el post, devuelve true o false



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
           <button onClick={(e)=>handleLike(e)}>{liked?<FcLike className='mr-4 ' size={40}/> :<FcLikePlaceholder className='mr-4 ' size={40}/>}</button>
            <span className='mt-2 mr-2 font-semibold'>{likes}</span>
      </div>
      </div>
     
       
      </div>

      
  );
};

export default Post;