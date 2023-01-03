
import React, { useState, useEffect } from 'react'
import youtube from './api/youtube';
import Header from './components/Header';
import FeedList from './components/Feedlist';
import './App.css'
import { useNavigate } from 'react-router-dom';



export default function Home() {
     const [videos,setVideos]=useState([]);
     const [selectedVideo,setSelectedVideo]=useState(null);
 
 
  const handleSubmit=async(searchTerm)=>{
    const response = await youtube.get('search',{ params:{
        part:'snippet',
        maxResults:53,
        key:'AIzaSyCsOVF10ZnOpV6xi7aQEsBplG4c6-rLWts',
        q: searchTerm,
     }});
    setVideos(response.data.items)
  }  

  const navigate = useNavigate();
  
  const handleSubmitf=async(searchTerm)=>{
    const response = await youtube.get('search',{ params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCsOVF10ZnOpV6xi7aQEsBplG4c6-rLWts',
        q: searchTerm,
     }});
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
    navigate('/search',{state:{video:response.data.items,selectedVideos:response.data.items[0]}})
  }  

  useEffect(()=>{
    handleSubmit("Trending Movies 2022")
  },[])

  const onVideoSelect=(video)=>{
    setSelectedVideo(video)
    navigate('/search',{state:{video:videos,selectedVideos:video}})
  }
  
    return (
      <div id="fullpage">
        <Header onFormSubmit={handleSubmitf} />
        <FeedList videos={videos} onVideoSelect={onVideoSelect}/>
      </div>
    )
}
