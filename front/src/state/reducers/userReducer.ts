import {user} from '../../types'

const initialState:Object={
    user:[]
}

interface payload{
    type:string,
    payload?:user
}
const reducer = (state:user,action:payload) =>{
        switch(action.type){
            case "createUser":
                return {...state}
            default:
                return state
        }
}

export default reducer