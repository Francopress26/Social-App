import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {RiHomeFill }from 'react-icons/ri'
import {IoIosArrowForward} from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import logo from '../../assets/download.svg'
import user from '../../types'
import { getUserProfile } from '../../state/reducers/userSlice'

const Sidebar = (closeToggle:any)=>{
   
    // const user = useAppSelector((state)=>state.userActual)
    const isNotActiveStyle='flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
    const isActiveStyle='flex items-center px-5 gap-3 font-extrabold border-r-2  transition-all duration-200 ease-in-out capitalize'
    const user = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')|| ""): localStorage.clear()
    const userAct = useAppSelector((state)=>state.userActual)
    const categories= [
        {name:"Animals"},
        {name:"Wallpapers"},
        {name:"Photography"},
        {name:"Gaming"},
        {name:"Coding"},
    ]
    const dispatch=useAppDispatch()
    
    const handleCloseSidebar=()=>{
        if(closeToggle) {
            
            // dispatch(getUserProfile(userAct?.id))
            closeToggle(false)
        }
    }
    
    
    
    
    
    return(
        <div className="flex flex-col justify-between bg-white   h-full overflow-y-scrikk min-w-210 hide-scrollbar position:sticky">
            <div className='flex flex-col '>
                <Link to="/" className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' onClick={handleCloseSidebar}>
                    <img src={logo} alt="logo" className='w-full'></img>
                </Link>
                <div className='flex flex-col gap-5'>

                    <NavLink to="/" 
                    className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle} 
                    // onClick={handleCloseSidebar}
                    >
                        <RiHomeFill/>
                        Home
                    </NavLink>

                    <h3 className='mt-2 px-5 text-base 2x1:text-xl'>Discover Categories</h3>
                    
                    {categories.slice(0,categories.length-1).map((category)=>(

                        <NavLink to={`/category/${category.name}`} 
                        className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle} 
                        onClick={handleCloseSidebar}
                        key={category.name}
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user &&(
                <Link to={`/user-profile/${user.email}`} 
                className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
            //    nClick={handleCloseSidebar} o
                >
                    <img src={user?.picture} className="w-10 h-10 rounded-full" alt="userprofile"/>
                    <p>{user?.name}</p>
                </Link>
            )}
        </div>
    )
}

export default Sidebar