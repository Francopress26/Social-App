import React,{useState,useRef,useEffect} from 'react'
import{HiMenu} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link,Route,Routes} from 'react-router-dom'
import logo from '../../assets/download.svg'
import Sidebar from '../Sidebar/Sidebar'
import { useAppSelector}  from '../../state/hooks'
import { actualUser } from '../../state/reducers/userSlice'
import { useAppDispatch } from '../../state/hooks'
import { getAllPosts } from '../../state/reducers/userSlice'
import MasonryLayout from '../MasonryLayout/MasonryLayout'
const Home = ()=>{
    const [toggleSidebar,setToggleSidebar]=useState(false)
    const scrollRef=useRef(null)
    const user = useAppSelector((state)=>state.userActual)
    const dispatch=useAppDispatch()
    const user1 = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')|| ""): localStorage.clear()
    useEffect(()=>{
        dispatch(getAllPosts())
    },[])
   
       
    return(
        <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out '>
            
            <div className='hidden md:flex h-screen flex-initial'>
                <Sidebar closeToggle={""} />
            </div>
            <div className='flex md:hidden flex-row'>
                <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>

                <HiMenu fontSize={40} className="cursor-pointer" onClick={()=>setToggleSidebar(true)}/>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-28'/>
                </Link>
                <Link to={'/'}>
                    <img src={user1?.picture} alt="logo" className='w-28'/>
                </Link>
                </div>
                {toggleSidebar && (
                <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in '>
                    <div className='absolute w-full flex justify-end items-center p-2'>
                        <AiFillCloseCircle fontSize={30}  className="cursor-pointer" onClick={()=>setToggleSidebar(false)}/>
                    </div>
                    <Sidebar closeToggle={setToggleSidebar} />
                </div>
            )}     
            </div>
         
            <div className='pb-2 flex-1 h-screen overflow-y-scroll ' ref={scrollRef}>
                {/* <Routes> */}
                {/* <Route path="/user-profile/:userId" element={<UserProfile/>}/> */}
                {/* <Route path="/*" element={<Pins user={user && user}/>}/> */}
                  
                {/* </Routes> */}
            </div>
            <MasonryLayout/>
        </div>
    )
}

export default Home