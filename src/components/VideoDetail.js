import React from 'react'
import { Paper,Typography } from '@mui/material'
import { height, padding } from '@mui/system'

export default function VideoDetail({video}) {
    if(!video) return <div style={{color:white}}>Loading....</div>
    const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <React.Fragment >
        <Paper elevation={6} style={{height:'80vh', width:'50vw',marginLeft:'40px'}}>
        {/* An inline frame (iframe) is a HTML element that loads 
        another HTML page within the document. It essentially 
        puts another webpage within the parent page. They are 
        commonly used for advertisements, embedded videos, 
        web analytics and interactive content. */}
          <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videosrc}></iframe> 
        </Paper>
        <Paper elevation={10} style={{padding:'15px',width:'50vw',marginLeft:'20px',borderBottomLeftRadius:'50px'}}>
          <Typography variant='h4'>{video.snippet.title}</Typography>
          <Typography variant='subtitle2'>{video.snippet.channelTitle}</Typography>
          <Typography variant='subtitle2'>{video.snippet.description}</Typography>
        </Paper>
    </React.Fragment>
  )
}
