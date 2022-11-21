import { combineReducers } from "redux";
import userReducer from './userSlice'
const reducers = combineReducers({
    user:userReducer
})

export default reducers