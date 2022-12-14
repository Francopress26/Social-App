import React,{useState,useRef,useEffect} from 'react'
import{HiMenu} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link,Route,Routes} from 'react-router-dom'
import logo from '../../assets/download.svg'
import Sidebar from '../Sidebar/Sidebar'
import { getUserProfile } from '../../state/reducers/userSlice'
import { useAppDispatch } from '../../state/hooks'
import { getAllPosts } from '../../state/reducers/userSlice'

import Posts from '../Posts/Posts'
import { user } from '../../types'
import Profile from '../Profile/Profile'
const Home = ()=>{
    const [toggleSidebar,setToggleSidebar]=useState(false)
    const scrollRef=useRef(null)
    const dispatch=useAppDispatch()
    const user1:user = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')|| ""): localStorage.clear()
    useEffect(()=>{
        
        dispatch(getAllPosts(user1.email))
        // HAGO EL GET USER ACTUAL ACA PERO CON EL MAIL Y DESPUES LOS DEMÁS COMPONENTES PUEDEN ACCEDER AL ID
        dispatch(getUserProfile(user1.email))
    },[])
   
       
    return(
        <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out '>
            
            <div className='hidden md:flex h-screen flex-initial border-r-black border-solid border'>
                <Sidebar closeToggle={""} />
            </div>
            
            <div className='flex md:hidden flex-row'>
                <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>

                <HiMenu fontSize={40} className="cursor-pointer" onClick={()=>setToggleSidebar(true)}/>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-28'/>
                </Link>
                <Link to={`/`}>
                    <img src={user1?.picture} alt="logo" className='w-28'/>
                </Link>
                </div>
                {toggleSidebar && (
                <div className='fixed w-2/4 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in '>
                    <div className='absolute w-full flex justify-end items-center p-2'>
                        <AiFillCloseCircle fontSize={30}  className="cursor-pointer" onClick={()=>setToggleSidebar(false)}/>
                    </div>
                    <Sidebar closeToggle={setToggleSidebar} />
                </div>
            )}     
            </div>
         
            <div className='pb-2 flex-1 h-screen overflow-y-scroll ' ref={scrollRef}>
                <Routes>
                <Route path="/user-profile/:id" element={<Profile />}/>
                <Route path='/*' element={<Posts />} />
                
                  
                </Routes>
            </div>
           
        </div>
    )
}

export default Home