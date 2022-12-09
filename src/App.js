
import React, { Component } from 'react'
import { Grid } from '@mui/material';
import youtube from './api/youtube';
import { SearchBar ,VideoDetail, VideoList } from './components' //actually from index.js but special right of index
import Header from './components/Header';
import './App.css'


export default class App extends Component {
  state={
     videos:[],
     selectedVideo:null,
  }
 
  handleSubmit=async(searchTerm)=>{
    // Event.preventDefault();
    //we make this asychronous function beacuse we are fetching data 
    const response = await youtube.get('search',{ params:{
      //The part parameter is a required parameter for any API request that retrieves or returns a resource. 
      //these all are there in te api documentation
        part:'snippet',//means going to return videos
        maxResults:5,
        key:'AIzaSyCsOVF10ZnOpV6xi7aQEsBplG4c6-rLWts',
        q: searchTerm,
     }});
    //params q beacuse parameter query 
    console.log(response.data.items);
    this.setState({videos: response.data.items,selectedVideo:response.data.items[0]})
  }  
  onVideoSelect=(video)=>{
     this.setState({selectedVideo:video})
  }
  render() {
    return (
      <div>
        <Header/>
        <Grid justify='center' container spacing={10} style={{backgroundColor:'2f2fa2'}}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={this.state.selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

