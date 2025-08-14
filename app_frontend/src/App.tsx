// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import Navbar from "./components/common/Navbar"

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sign-up" element={<SignupPage />}/>
        <Route path="/sing-in" element={<SigninPage />}/>
      </Routes>
    </div>
  )
}

export default App
