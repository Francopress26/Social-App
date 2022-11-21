import user from "../../types"
import { Dispatch } from "redux"
import axios from "axios"

export const createOrLogUser= (user1:user) => {
    return async function (dispatch:Dispatch){
        try {
             await axios.post(`http://localhost:3001/user/google`,user1)
             console.log("En el action")
        } catch (error) {
            console.log(error)
        }
    }   
}


// const fetchUsers = () => async dispatch => {
//     dispatch(usersLoading());
//     const response = await usersAPI.fetchAll()
//     dispatch(usersReceived(response.data));

// }