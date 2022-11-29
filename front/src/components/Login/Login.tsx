import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import shareVideo from '../../assets/share.mp4'
import logo from '../../assets/logo.svg'
import {GoogleCredentialResponse, GoogleLogin, googleLogout} from '@react-oauth/google'
import axios from 'axios'

import jwt_decode from 'jwt-decode'
import {user} from '../../types'
// import { useDispatch } from 'react-redux'
// import { createOrLogUser } from '../../state/actions'
import { fetchGoogleUser } from '../../state/reducers/userSlice'
import { useAppSelector,useAppDispatch } from '../../state/hooks'
const Login=()=>{
    const navigate = useNavigate()
   
    const dispatch= useAppDispatch()
    
 
  

    const createOrGetUser= async(response: any): Promise<void>=>{

        const decoded:user=jwt_decode(response.credential)
        const {family_name,given_name,name,picture,email,id:sub}= decoded
        const user1:user={
            id:sub,
            family_name:family_name,
            given_name:given_name,
            name:name,
            email:email,
            picture:picture
        }
        localStorage.setItem('user',JSON.stringify(user1))

       dispatch(fetchGoogleUser(user1))

       navigate("/")
    }

    return(
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                src={shareVideo}
                loop
                controls={false}
                muted
                autoPlay
                className="w-full h-full object-cover"
                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logo} width="130px" alt="logo"></img>
                    </div>
                    <div className='shadow-2x1'>
                        <GoogleLogin 
                            onSuccess={(response)=>createOrGetUser(response)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login