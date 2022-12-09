import React from 'react'
import { Grid,Paper } from '@mui/material'
import VideoItem from './VideoItem'
export default function videoList({videos,onVideoSelect}) {
    const list=videos.map((video,id)=><VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
  return (
    <Grid container spacing={3} style={{width:'10%',marginTop:'10px'}}>
        <Paper elevation={5}>{list}</Paper>
    </Grid>
    );
  
}
