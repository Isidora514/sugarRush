import React, { Component } from 'react';
import styled from 'styled-components'


import logo from "../../images/logo.png"



export default function Navbar(props) {

  return(
    <nav className="nav blue-bg">
      <div className="navIcons">
        <div id="logoDiv">
        <img id="navLogo" src={logo} alt="logo" />
        </div>
        <li><a href="https://sugar-rush-demo.netlify.app/"><h1>HOME</h1></a></li>
        <li><a href="https://sugar-rush-demo.netlify.app/about"><h1>ABOUT</h1></a></li>
        <li><a href="https://sugar-rush-demo.netlify.app/media"><h1>MEDIA</h1></a></li>
        <li><a href="https://sugar-rush-demo.netlify.app/contact"><h1>CONTACT</h1></a></li>
      </div>
    </nav>
  ) 
}