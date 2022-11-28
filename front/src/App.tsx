import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route,useNavigate} from 'react-router-dom'
import {GoogleOAuthProvider} from '@react-oauth/google'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Feed from './components/Feed/Feed'
function App() {
  
 const clientId= import.meta.env.VITE_GOOGLE_API_TOKEN

  return (
<GoogleOAuthProvider clientId={clientId}>


  <Routes>
    <Route path='login' element={<Login/>}/>
    <Route path='/*' element={<Home/>} />
    <Route path='/*' element={<Feed/>} />

  </Routes>
  </GoogleOAuthProvider>
  )
}

export default App
