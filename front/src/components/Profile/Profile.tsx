import React,{useEffect} from 'react'
import { bdUser } from '../../types'
import { useAppDispatch,useAppSelector } from '../../state/hooks'
import { getUserProfile } from '../../state/reducers/userSlice'
import { Link, useParams } from 'react-router-dom'

const Profile = ()=>{
     const {id}=useParams()
    //dispatch del get user segun la id que me llego
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getUserProfile(id))
    },[])
    const userProfile:bdUser | null= useAppSelector((state)=>state.userProfile)
    return(
       
        <div>
            <p>{userProfile?.username}</p>
            <p>HOLAAA</p>
            <Link to ="/">VOLVER</Link>

        </div>
        
    )



}



export default Profile