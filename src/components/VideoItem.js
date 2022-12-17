import React from 'react'
import { Grid,Paper,Typography } from '@mui/material' 

export default function VideoItem({video,onVideoSelect}) {
  return (
    <div>
      <Grid item >
        <Paper style={{margin:'10px',cursor:'pointer'}} onClick={()=>{onVideoSelect(video)}}>
            <img  alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
            <Typography varient='subtitile'><b>{video.snippet.title}</b></Typography>
        </Paper>
      </Grid>
    </div>
  )
}
