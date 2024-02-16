import React from 'react';
import './home.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Feed from '../feed/Feed'
import Library from '../library/Library'
import Player from '../player/Player'
import Trending from '../trending/Trending'
import Favorites from '../favorites/Favorites'
import Sidebar from '../../components/sidebar';
const Home = () => {
  return (

    
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
