import {user,PostI, bdUser, likePut} from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState} from '../store'
import axios from 'axios'


interface InitialState{
    userActual:bdUser | null,
    posts:PostI[],
    postDetail?:{user:bdUser,post:PostI} | null
    userProfile:bdUser | null,
    liked:boolean | null
    loading:boolean,
    error:string | null
}
const initialState:InitialState={
    userActual:null,
    posts:[],
    userProfile:null,
    liked:null,
    loading:false,
    error:null
}

export const fetchGoogleUser = createAsyncThunk(
    'userSlice/fetchGoogleUser', 
    async (data:user, thunkApi)=>{
       
    try {
    const response = await axios.post<bdUser>(`http://localhost:3001/user/google`,data)
    thunkApi.dispatch(actualUser(response.data))
    return response.data
            
        } catch (error:any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
     
})

export const getAllPosts = createAsyncThunk(
    'userSlice/getAllPosts',
    async(data:string,thunkApi)=>{
        if(initialState.posts.length>1){return "Ya ta lleno papu"}
        try {
            const response = await axios.get<PostI>(`http://localhost:3001/post?email=${data}`)
            return response.data
        } catch ( error:any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
})

export const getDetailPost = createAsyncThunk(
    'userSlice/getDetailPost',
    async (data:string | undefined,thunkApi)=>{
        try {
            const response = await axios.get<{user:bdUser,post:PostI}>(`http://localhost:3001/post/detail/${data}`)
            return response.data
        } catch (error:any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
})


export const getUserProfile = createAsyncThunk(
    'userSlice/getUserProfile',
    async(data:string | undefined,thunkApi)=>{
        try {
            const userProfile = await axios.get<bdUser>(`http://localhost:3001/user/${data}`)
            console.log("EN EL GET USER PROFILE")
            console.log(userProfile.data)
            return userProfile.data
        } catch (error:any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
})

export const addPostLike = createAsyncThunk(
    'userSlice/addPostLike',
    async(data:likePut, thunkApi)=>{
        try{
            const response = await axios.put(`http://localhost:3001/post/likes?cant=${data.cant}&id=${data.id}&username=${data.username}`)
            return response.data
        }catch(error:any){
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
    }
    )
export const putLiked = createAsyncThunk(
        'userSlice/putLiked',
        async (data:{email:string,postId:string},thunkApi)=>{
            try {
                console.log("en el liked")
                const response = await axios.put(`http://localhost:3001/user/liked?email=${data.email}&id=${data.postId}`)
                return response.data
            } catch (error:any) {
                const message = error.message;
                return thunkApi.rejectWithValue(message);
            }
    })
export const putUnliked = createAsyncThunk(
        'userSlice/putUnliked',
        async (data:{email:string,postId:string},thunkApi)=>{
            try {
                console.log("en el unliked")
                const response = await axios.put(`http://localhost:3001/user/unliked?email=${data.email}&id=${data.postId}`)
                return response.data
            } catch (error:any) {
                const message = error.message;
                return thunkApi.rejectWithValue(message);
            }
    })
    export const checkLike = createAsyncThunk(
        'userSlice/checkLike',
        async (data:{email:string,postId:string},thunkApi)=>{
            try {
                console.log("en el unliked")
                const response = await axios.get<boolean>(`http://localhost:3001/user/searchLikes?email=${data.email}&id=${data.postId}`)
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
        actualUser(state,action:PayloadAction<bdUser>){
            state.userActual=action.payload
        },
        clearDetail(state){
            state.postDetail=null
        }
    },
    extraReducers(builder){
        builder.addCase(fetchGoogleUser.pending, state =>{state.loading=true})
        builder.addCase(fetchGoogleUser.fulfilled,(state,action:PayloadAction<bdUser>)=>{
                                        state.loading=false
                                        state.userActual= action.payload                                 
                        })
        builder.addCase(fetchGoogleUser.rejected, (state,action:PayloadAction<any>)=>{
                                        state.loading=false, state.error=action.payload
                        })


        builder.addCase(getAllPosts.pending,state =>{state.loading=true})
        builder.addCase(getAllPosts.fulfilled,(state,action:any)=>{
            state.loading=false
            state.posts= action.payload                                
                        })
        builder.addCase(getAllPosts.rejected, (state,action:PayloadAction<any>)=>{
            state.loading=false, state.error=action.payload
                        })


        builder.addCase(getDetailPost.pending,state=>{state.loading=true})
        builder.addCase(getDetailPost.fulfilled,(state,action:PayloadAction<{user:bdUser,post:PostI}>)=>{
            console.log("En el builder")
            console.log(action.payload)
            state.loading=false
            state.postDetail= action.payload                                 
                        })
        builder.addCase(getDetailPost.rejected, (state,action:PayloadAction<any>)=>{
            state.loading=false, state.error=action.payload
                        })

                        
        builder.addCase(getUserProfile.pending,state=>{state.loading=true})
        builder.addCase(getUserProfile.fulfilled,(state,action:PayloadAction<bdUser>)=>{
            console.log("en el user profile")
            console.log(action.payload)
            state.loading=false
            state.userProfile=action.payload
        })
        builder.addCase(getUserProfile.rejected, (state,action:PayloadAction<any>)=>{
            state.loading=false, state.error=action.payload
                        })
        builder.addCase(addPostLike.pending,state=>{state.loading=true})
        builder.addCase(addPostLike.fulfilled,state=>{state.loading=false})
        builder.addCase(addPostLike.rejected, (state,action:PayloadAction<any>)=>{
            state.loading=false, state.error=action.payload
                        })
        builder.addCase(putLiked.pending,state=>{state.loading=true})
        builder.addCase(putLiked.fulfilled,state=>{state.loading=false})
        builder.addCase(putLiked.rejected,(state,action:PayloadAction<any>)=>{
            state.loading=false, state.error=action.payload
                        })
        builder.addCase(putUnliked.pending,state=>{state.loading=true})
        builder.addCase(putUnliked.fulfilled,state=>{state.loading=false})
        builder.addCase(putUnliked.rejected,(state,action:PayloadAction<any>)=>{
        state.loading=false, state.error=action.payload
                                        })

   builder.addCase(checkLike.pending,state=>{state.loading=true})
        builder.addCase(checkLike.fulfilled,(state,action:PayloadAction<boolean>)=>{state.loading=false, state.liked=action.payload})
        builder.addCase(checkLike.rejected,(state,action:PayloadAction<any>)=>{
        state.loading=false, state.error=action.payload
                                        })                                        
    },
  })

export const {actualUser,clearDetail} = userSlice.actions
export default userSlice.reducer