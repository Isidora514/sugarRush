import React, { Component } from 'react';
import styled from 'styled-components'


import logo from "../../images/logo.png"



export default function Navbar(props) {

  return(
    <nav className="blue-bg">
        <div id="logoDiv">
          <img id="navLogo" src={logo} alt="logo" />
        </div>
        {/* <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/media">MEDIA</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul> */}
    </nav>
  ) 
}