import React, { Component } from 'react';
import youtubeLogo from '../images/youtube-icon.png';
import tiktokLogo from '../images/TikTok.png';

export default function Follow (props) {


  return (
  <section id="followSection">
    <h1 className='magenta'> Follow us on Youtube and Tiktok! </h1>
    <div className="followLinks">
    <img className="youtubeLogo" src={youtubeLogo} />  
    <img className="tiktokLogo" src={tiktokLogo} />
    </div>
  </section>
  );
}