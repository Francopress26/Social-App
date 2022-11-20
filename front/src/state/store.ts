// import { createStore, applyMiddleware} from 'redux'
 import userReducer from './reducers/userReducer'
// import thunk from 'redux-thunk'

// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )
import { configureStore } from '@reduxjs/toolkit'
// ...

 const store = configureStore({
  reducer: {
        user:userReducer
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch