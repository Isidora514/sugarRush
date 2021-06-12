import React, { Component } from 'react';
import smallChicken from "../images/home/Poussins.png";
import banner from "../images/home/Home-banner.png";

export default function Header (props) {


    return (
      <header id="home">
      <div className='bannerDiv'>
         <img src={banner} id="banner" />
      </div>
      <div id="description" className="text-white">
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses</p>
      </div>
      <div id="videodiv">
         <img className="chicken" src={smallChicken} />
      <iframe id="videoWindow" width="560" height="315" src="https://www.youtube.com/embed/los4K5cif30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
   </header>
    );
}
