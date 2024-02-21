import React from 'react'
import './albuminfo.css'
const AlbumInfo = ({album}) => {
    // console.log(album);
    const artists=[];
    album?.artists?.forEach(element => {
        artists.push(element.name);
    });
    console.log(artists);
  return (
    <div>
        <div className='albumname-container'>
            <p>{album.name+" - "+artists?.join(", ")}</p>
        </div>
        <div className='album-info'>
            <p>{`${album?.name} is a ${album?.album_type} by ${artists?.join(", ")} with ${album?.total_tracks} track{s}`}</p>

        </div>
        <div className='album-release'>
            <p>
                {`Release Date: ${album?.release_date}`}
            </p>
        </div>
    </div>
  )
}

export default AlbumInfo
