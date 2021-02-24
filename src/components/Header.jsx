import React from "react"
import  './Header.css'
import  logo from '../Picture/logo.png'

function Header(){
  return (

      <div class="topnav xxx"  id="myTopnav">
        <div className="image">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="mid" id="myTopnav">
          <h1>Bindu's Cake Corner</h1>
        </div>
        <div className="last" id="myTopnav">
          <a href="#home" class="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">About</a>
          <a href="#about">Services</a>
          <a href="#about">Gallery</a>
        </div>
      </div>

    );
};

export default Header;
