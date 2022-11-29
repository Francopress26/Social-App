import React from "react"
import {Link,useNavigate} from 'react-router-dom'
import {IoMdAdd, IoMdSearch} from 'react-icons/io'
import { useAppSelector } from "../../state/hooks"
import { useAppDispatch } from "../../state/hooks"
import userSlice, { actualUser } from "../../state/reducers/userSlice"
import { useEffect } from "react"

const Navbar=()=>{
    const navigate= useNavigate()
    const dispatch= useAppDispatch()
    const user1 = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')|| ""): localStorage.clear()

    return(

        <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ml-4">
            <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
                    <IoMdSearch fontSize={21} className="m1-1"/>
                    <input  
                    type="text" 
                    // onChange={(e)=>setSearchTerm(e.target.value)} 
                    // placeholder="Search" value={searchTerm} 
                    // onFocus={()=>navigate('/search')} 
                    className="p-2 w-full bg-white outline-none"/>
            </div>   
            <div className="flex gap-3 mr-6">
                <Link to={`/` }className="hidden md:block">
                    <img src={user1?.picture}alt="userImg" className="w-14 h-12 rounded-lg"></img>
                </Link>
                <Link to='/' className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
                    <IoMdAdd/>
                </Link>
            </div>
         </div>
    )
        
    
}

export default Navbar