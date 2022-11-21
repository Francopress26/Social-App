import React from "react";
import {Circles,ProgressBar,InfinitySpin } from 'react-loader-spinner'




const Spinner=()=>{
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <InfinitySpin  color="#00BFFF" height={50} width={200} className="m-5"/>
            <p className="text-lg text-center px-2">Loading</p>
        </div>
    )
}

export default Spinner