
import React, { useState, useEffect } from 'react'
import youtube from '../api/youtube';
import Header from './Header';
import FeedList from './Feedlist';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function Home() {
     const location=useLocation();
     const [videos,setVideos]=useState(location.state.video);
     const [selectedVideo,setSelectedVideo]=useState(location.state.selectedVideos);
   
    //  const [videos,setVideos]=useState([]);
    //  const [selectedVideo,setSelectedVideo]=useState(null);
 

  const navigate = useNavigate();
  
  const handleSubmitf=async(searchTerm)=>{
    if(searchTerm!=""){
    const response = await youtube.get('search',{ params:{
        part:'snippet',
        maxResults:50,
        key:'AIzaSyCsOVF10ZnOpV6xi7aQEsBplG4c6-rLWts',
        q: searchTerm,
     }});
    setVideos(response.data.items)
    // setSelectedVideo(response.data.items[0])
    // navigate('/',{state:{video:response.data.items,selectedVideos:response.data.items[0]}})
    }
  }  
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
