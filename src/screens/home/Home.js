import React, { useEffect, useState } from 'react';
import './home.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Feed from '../feed/Feed'
import Library from '../library/Library'
import Player from '../player/Player'
import Trending from '../trending/Trending'
import Favorites from '../favorites/Favorites'
import Sidebar from '../../components/sidebar';
import Login from '../auth/login.js';
import { setClientToken } from '../../spotify.js';
const Home = () => {

  const [token,setToken]=useState("");
  useEffect(()=>{

    const tokenn=window.localStorage.getItem("token");
    const hash=window.location.hash;
    window.location.hash="";
    if(!tokenn && hash)
    {
    const _token=hash.split('&')[0].split('=')[1];
    window.localStorage.setItem("token",_token);
    setToken(_token);
    setClientToken(_token);
    }
    else{
      setToken(tokenn);
      setClientToken(tokenn);
    }
  },[])
  return (
    
    !token?
    <Login/> :
    <Router>
        <div className='main-body'>
           <Sidebar/>
          <Routes>
              <Route path="/" element={<Library/>} exact/>
              <Route path="/feed" element={<Feed/>} exact/>
              <Route path="/player" element={<Player/>} exact/>
              <Route path="/trending" element={<Trending/>} exact/>
              <Route path="/favorites" element={<Favorites/>} exact/>
          </Routes> 
        </div>
    </Router>
  )
}

export default Home
