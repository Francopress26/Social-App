import React from "react";
import { PostI, user } from "../../types";
import { useAppSelector } from "../../state/hooks";

const Detail = ()=>{
    const userActual:user = useAppSelector((state)=>state.userActual)
    // Aca deberia hacer un dispatch que busque dentro de los posts del usuario el post que tenga el id que me llega por parametros
        return(
            <div>
                    <h1>Detail</h1>
                    <img src={userActual?.picture}></img>
            </div>
        )
}

export default Detail