import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
    const [showhorinav,setShowhorinav]=useState(false);
    const showhorinavinhead=()=>{
      if(showhorinav==false){
        document.getElementById("horinavonhead").style.display='grid';
        document.getElementById("feedlist-full").style.filter='blur(1px)';
        document.getElementById("feedlist-full").style.pointerEvents='none';
        document.getElementsByTagName("body")[0].style.overflowX='none';
        document.getElementsByTagName("body")[0].style.overflow='hidden';
        setShowhorinav(true);
      }else{
        document.getElementById("horinavonhead").style.display='none';
        document.getElementById("feedlist-full").style.filter='none';
        document.getElementById("feedlist-full").style.pointerEvents='auto';
        document.getElementsByTagName("body")[0].style.overflow='none';
        document.getElementsByTagName("body")[0].style.overflowX='hidden';
        document.getElementsByTagName("body")[0].style.overflowY='scroll';
        setShowhorinav(false);
      }
    }
  return (
    <>
    <div id="header">
      <div id="hamburgerinheader" onClick={showhorinavinhead} className="header"><i className="fa-solid fa-bars fa-2x"></i></div>
      <i style={{color:'red'}} id="youtubeicon" className="fa-brands fa-youtube fa-2x"></i>
      <Link style={{textDecoration:'none',color:'white'}} to="/"><h2 id="header-head">YouTube</h2></Link>
      <form id="header-head-form" onSubmit={(e)=>{handleSubmit(e);return false}}>
         <input onChange={handleChange} placeholder="Search...."></input>
         <div id="form-div"><i className="fa-solid fa-magnifying-glass fa-1g" onClick={(e)=>{handleSubmit(e);return false}}></i></div>
      </form>
      <div className="header"><i id="headeruser" className="fa-solid fa-user fa-2x"></i></div>
    </div>
    <div id="horinavonhead">
       <div></div>
       <div><i className="fa-solid fa-bars fa-1g"></i><h3>Home</h3></div>
       <div><i class="fa-solid fa-clock-rotate-left"></i><h3>History</h3></div>
       <div><i class="fa-solid fa-thumbs-up"></i><h3>Liked</h3></div>
       <div><i class="fa-solid fa-fire"></i><h3>Trending</h3></div>
       <div><i class="fa-solid fa-gear"></i><h3>Settings</h3></div>
    </div>
    </>
    
  )
}
