import user from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState} from '../store'
import axios from 'axios'


interface InitialState{
    userActual:user | null,
    loading:boolean,
    error:string | null
}
const initialState:InitialState={
    userActual:null,
    loading:false,
    error:null
}

export const fetchGoogleUser = createAsyncThunk(
    'userSlice/fetchGoogleUser', 
    async (data:user, thunkApi)=>{
        thunkApi.dispatch(actualUser(data))
    try {
    const response = await axios.post<user>(`http://localhost:3001/user/google`,data)
    console.log(response)
    return response.data
            
        } catch (error:any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
     
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        actualUser(state,action:PayloadAction<user>){
            state.userActual=action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(fetchGoogleUser.pending, state =>{state.loading=true})
        builder.addCase(fetchGoogleUser.fulfilled,(state,action:PayloadAction<user>)=>{
                                        console.log("En el builder")
                                        console.log(action.payload)
                                        state.loading=false
                                        state.userActual= action.payload                                 
                        })
        builder.addCase(fetchGoogleUser.rejected, (state,action:PayloadAction<any>)=>{
                                        state.loading=false, state.error=action.payload
                        })
    },
  })

export const {actualUser} = userSlice.actions
export default userSlice.reducer