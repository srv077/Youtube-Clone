import React from 'react'
import "../style/VideoItem.css"
export default function VideoItem({video,onVideoSelect}) {
  return (
        <div id="videoitem" onClick={()=>{onVideoSelect(video)}}>
            <img id="thumbnail-feed" alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
            <h5>{video.snippet.title}</h5>
        </div>
  )
}
