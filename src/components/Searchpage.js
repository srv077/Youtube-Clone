
import React, { useState, useEffect } from 'react'
import youtube from '../api/youtube'; //actually from index.js but special right of index
import VideoDetail from "./VideoDetail"
import VideoList from "./VideoList"
import Header from './Header';
import { useLocation } from 'react-router-dom';
import '../style/Searchpage.css'


export default function Seachpage() {
  const location=useLocation();
  const [videos,setVideos]=useState(location.state.video);
  const [selectedVideo,setSelectedVideo]=useState(location.state.selectedVideos);

  
 
  const handleSubmit=async(searchTerm)=>{
    const response = await youtube.get('search',{ params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCsOVF10ZnOpV6xi7aQEsBplG4c6-rLWts',
        q: searchTerm,
     }}); 
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])  
  }  
  
  const onVideoSelect=(video)=>{
    setSelectedVideo(video)
  }
    return (
      <div id="Searchpagefull">
        <Header onFormSubmit={handleSubmit} />
        <div style={{height:'20vh'}}></div>
        <VideoDetail video={selectedVideo} />
        <br></br>
        <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
      </div>
    )
}








 
 

  

 

  
  
    
