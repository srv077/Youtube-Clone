import React, { useState } from 'react'
import '../style/Header.css'

export default function Header(props) {
  const [searchTerm,setSearchTerm] =useState('');
    const handleChange=(e)=>{
         setSearchTerm(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onFormSubmit(searchTerm);
    }
  return (
    <div id="header">
      <div className="header"><i className="fa-solid fa-bars fa-2x"></i></div>
      <i style={{color:'red'}} className="fa-brands fa-youtube fa-2x"></i>
      <h2 id="header-head">YouTube</h2>
      <form id="header-head-form" onSubmit={(e)=>{handleSubmit(e);return false}}>
         <input onChange={handleChange} placeholder="   Search...."></input>
         <div id="form-div"><i className="fa-solid fa-magnifying-glass fa-2x"></i></div>
      </form>
      <div className="header"><i className="fa-solid fa-user fa-2x"></i></div>
    </div>
    
  )
}
