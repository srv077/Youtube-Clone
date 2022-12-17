
import React, { Component, useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import youtube from './api/youtube';
import { SearchBar ,VideoDetail, VideoList } from './components' //actually from index.js but special right of index
import Header from './components/Header';
import FeedList from './components/Feedlist';
import './App.css'
import { Navigate, useNavigate } from 'react-router-dom';




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
    setSelectedVideo(response.data.items[0])  }  

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
    navigate('/s',{state:{video:response.data.items,selectedVideos:response.data.items[0]}})
  }  

  useEffect(()=>{
    handleSubmit("trending")
  },[])

  const onVideoSelect=(video)=>{
    setSelectedVideo(video)
    navigate('/s',{state:{video:videos,selectedVideos:video}})
  }
  
    return (
      <div>
        <Header/>
        <Grid justify='center' container spacing={10} style={{backgroundColor:'2black'}}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={handleSubmitf} />
              </Grid>
              <Grid item xs={12}>
                <FeedList videos={videos} onVideoSelect={onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
}
