import user from "../../types"
import { Dispatch } from "redux"
import axios from "axios"

export const createUser= (user1:user)=>{
    return async function (dispatch:Dispatch){
        console.log("action")
        console.log(user1)
        try {
            await axios.post(`http://localhost:3001/user/google`,user1)
            return dispatch({
                type:"createUser"
            })
        } catch (error) {
            console.log(error)
        }
    }   
}