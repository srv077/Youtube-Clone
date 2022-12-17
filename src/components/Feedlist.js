import React from 'react'
import { Grid,Paper } from '@mui/material'
import VideoItem from './VideoItem'
export default function FeedList({videos,onVideoSelect}) {
  return (
    <Grid item xs={12} style={{display:'flex',justifyContent:'center',direction:'column', flexWrap:'wrap', backgroundColor:'282828'}}>
    {
        videos.map((video,id)=>(
            <Grid item xs={4} sm={4} md={4} key={id}>
            <Paper elevation={6} style={{backgroundColor:'black'}}>
                <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
            </Paper>
            </Grid>
        ))
    }  
    </Grid >
    )
}