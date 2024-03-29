import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import SongCard from '../../components/songcard/SongCard';
import Queue from '../../components/queue/Queue';
const Player = () => {

  const [tracks,setTracks]=useState([]);
  const [currentTrack,setCurrentTrack]= useState({});
  const [currentIndex,setCurrentIndex]=useState(0);

  const location=useLocation();
  useEffect(()=>{
    if(location.state)
    {
      apiClient.get('playlists/'+location.state?.id+'/tracks')
      .then((res)=>{
        console.log(res.data);
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      });
    }
  },[location.state]);

  return (
    <div className='screen-container flex'>
        <div className='left-player-body'></div>
        <div className='right-player-body'>
          <SongCard album={currentTrack.album}/>
          <Queue/>
        </div>
    </div>
  )
}

export default Player
