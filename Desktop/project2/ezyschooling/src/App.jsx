import React,{useState} from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './Header/Header.jsx'
import Home from "./Home/HomePage.jsx"
import Footer from "./Footer/FooterPage.jsx"
import Signup from "./signup/signup.jsx"
import Profile from "./profile/Profile.jsx"
import Explore from './explore/Explore.jsx';
import Login from './login/Login.jsx';


const App = () => {
  const [selectedCity,setSelectedCity] = useState("");
  return (
    <BrowserRouter>
    <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
<main className='main-content'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/the class one" element={<Profile/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/explore" element={<Explore selectedCity={selectedCity} />}/>
    </Routes>  
</main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App

      
      