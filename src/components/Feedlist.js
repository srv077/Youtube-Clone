import React from 'react'
import VideoItem from './VideoItem'
import "../style/Feedlist.css"
import { Link } from 'react-router-dom'

export default function FeedList({videos,onVideoSelect}) {
  return (

    <div id="feedlist-full">
      <div id="feedlist-side">
        <div></div>
        <Link to='/'><div id="feedlist-side-icon"><img src="data:image/png;base64,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"></img></div></Link>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
       </div>
      <div id="feed-container">
        <div id="feed-left"></div>
        <div id="feed">
            {/* <div id="feed-topleft"></div> */}
            <div id="feed-item-group">
              <div id="feedtoleft"></div>
              <div id="feedlist-item">
            {
            videos.map((video,id)=>(
                <div id="feedlist-item-inside">
                  <div id="feedlist-item-inside-of">
                   <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>
                  </div>
                </div>
             ))
            }   
             </div>
        </div>
       </div>
    </div>
    </div >
    )
}