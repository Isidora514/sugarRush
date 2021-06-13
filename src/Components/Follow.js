import React, { Component } from 'react';
import youtubeLogo from '../images/youtube-icon.png';
import tiktokLogo from '../images/TikTok.png';

export default function Follow (props) {


  return (
  <section id="followSection">
    <h1 className='magenta'> Follow us on Youtube and Tiktok! </h1>
    <div className="followLinks">
    <a href="https://www.youtube.com/channel/UCkalsK7iUBi29AfUjSI_P4w" target="_blank"><img  className="youtubeLogo" src={youtubeLogo} /></a>
    <a href="https://www.tiktok.com/@sugarrushjams?lang=en" target="_blank"><img className="tiktokLogo" src={tiktokLogo} /></a>
    </div>
  </section>
  );
}