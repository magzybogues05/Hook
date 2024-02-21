import React from 'react'
import './albumimage.css'
const AlbumImage = ({url}) => {

   console.log(url);
  return (
    <div className='albumimage flex'>
        <img src={url} alt='album art' className='albumimage-art' />
        <div classname='albumimage-shadow'>
            <img src={url} alt='shadow'/>
        </div>
    </div>
  )
}
export default AlbumImage;