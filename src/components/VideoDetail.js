import React from 'react'
import "../style/VideoDetail.css"


export default function VideoDetail({video}) {
    if(!video) return <div style={{color:'white'}}>Loading....</div>
    const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <>
        <div id="videodetailfull" >
        {/* An inline frame (iframe) is a HTML element that loads 
        another HTML page within the document. It essentially 
        puts another webpage within the parent page. They are 
        commonly used for advertisements, embedded videos, 
        web analytics and interactive content. */}
          <iframe frameBorder='0' height='100%' width='60%' title='Video Player' src={videosrc}></iframe> 
        </div>
        <div id="videodetaillist" >
          <div >
          <div className='videodetaillist'><h3>{video.snippet.title}</h3></div>
          <div className='videodetaillist'><h3>{video.snippet.channelTitle}</h3></div>
          <div className='videodetaillist'>{video.snippet.description}</div>
          </div>
        </div>
    </>
  )
}
