import user from '../../types'

const initialState:Object={
    user:[]
}

interface payload{
    type:string,
    payload?:user
}
const userReducer = (state=initialState,action:payload) =>{
        switch(action.type){
            case "createUser":
                return {...state}
            default:
                return state
        }
}

export default userReducer