import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import shareVideo from '../../assets/share.mp4'
import logo from '../../assets/logo.svg'
import {GoogleCredentialResponse, GoogleLogin, googleLogout} from '@react-oauth/google'
import axios from 'axios'
import jwt_decode from 'jwt-decode'


const Login=()=>{

    const navigate = useNavigate()
    const video = useRef<HTMLVideoElement>();


 
    interface user {
        sub:string,
        family_name:string,
        given_name:string,
        name:string,
        email:string,
        picture:string
    }

    const createOrGetUser= async(response: any): Promise<void>=>{

        const decoded:user=jwt_decode(response.credential)
        const {family_name,given_name,name,picture,sub,email}= decoded
        const user={
            id:sub,
            fullName:name,
            first_name:family_name,
            last_name:given_name,
            email:email,
            profilePic:picture
        }
       console.log(user)
       //aca iria el post del user (dispatch)
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