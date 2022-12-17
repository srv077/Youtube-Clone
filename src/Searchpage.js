import './App.css'
import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import youtube from './api/youtube';
import { SearchBar ,VideoDetail, VideoList } from './components' //actually from index.js but special right of index
import Header from './components/Header';
import { useLocation } from 'react-router-dom';


export default function Seachpage({video,selectedVideos}) {
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
      <div>
        <Header/>
        <Grid justify='center' container spacing={10} style={{backgroundColor:'black'}}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
}








 
 

  

 

  
  
    
