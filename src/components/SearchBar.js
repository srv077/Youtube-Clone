import React, { useState } from 'react'
import { Paper, TextField } from '@mui/material';

// In Material Design, the physical properties of paper are translated to the screen .
// The background of an application resembles the flat, opaque texture of a sheet of paper, 
// and an application's behavior mimics paper's ability to be re-sized, shuffled, and bound together 
// in multiple sheets.

export default function SearchBar(props) {
    const [searchTerm,setSearchTerm] =useState('');
    const handleChange=(e)=>{
         setSearchTerm(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onFormSubmit(searchTerm);
    }
    return (
        <div style={{display:'flex',justifyContent:'center',color:'white'}}>
         <Paper elevation={6} style={{padding:'15px',width:'50%',backgroundColor:'#190061', color:'white',borderRadius:'30px' }}>
          <form onSubmit={(e)=>{handleSubmit(e);return false}}>
              <TextField sx={{ input: { color: 'white' } }} style={{width:'100%',backgroundColor:'282828',color:'white',borderRadius:'30px' }} label="Search ...." onChange={handleChange}/>
          </form>
         </Paper>
        </div>
    )
}
