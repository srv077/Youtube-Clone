import React from 'react'
import VideoItem from './VideoItem'
import '../style/VideoList.css'

export default function videoList({videos,onVideoSelect}) {
    
  return (
    <div id="videolistfull">
        <div id="videolistfullitem" >
          {
            videos.map((video,id)=><div><VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/></div>)
          }
        </div>
    </div>
    );
  
}
