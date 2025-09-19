import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './Components/UserProfile'
import img from "./assets/man-1.webp"
import img1 from "./assets/man-2.jpeg"
import img2 from "./assets/man-3.jpeg"
import img3 from "./assets/man-4.jpeg"
import img4 from "./assets/man-5.jpeg"
function App() {
 

  return (
    <div>
      <h1>User Imfornation</h1>
    <div className="user-grid">
       <UserProfile name = "meet" profilePic={img} email="trapasiya@.com" location="Surat" age="19" Occupation="Full-stack Developer"/>

     <UserProfile name = "darshik" profilePic={img1} email="darshik@.com" location="Surat" age="23" Occupation="UI-UX Designer"/>

      <UserProfile name = "lav" profilePic={img2} email="lav786@.com" location="Surat" age="22" Occupation="Front-End Developer"/>
      
       <UserProfile name = "krish" profilePic={img3} email="pajiyawala@.com" location="Surat" age="20" Occupation="Front-End Developer"/>

        <UserProfile name = "jaydeep" profilePic={img4} email="jdVora@.com" location="Surat" age="18" Occupation="Game-Developer"/>
    </div>
</div>

  )
}

export default App
