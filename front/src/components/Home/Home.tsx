import React from "react";
import { useAppSelector,useAppDispatch } from '../../state/hooks'

const Home = () =>{

    const user =useAppSelector((state)=>state.userActual)
    return(
        <div>{user?.family_name}</div>

    )
}

export default Home