import React, { Component } from 'react';

import youtubeLogo from '../images/youtube-icon.png';
import tiktokLogo from '../images/TikTok.png';
import footerAnimals from '../images/home/Footer-animals.png'; 
import barn from "../images/contact/barnContact.jpeg"
import house from "../images/contact/House-contact.png"
import banner from "../images/contact/banner-contact.png"

import tBone from "../images/contact/T-bone-contact.png"
import hay from "../images/contact/botte-foin-contact.png"
import wacky from "../images/contact/Wacky-duck-contact.png"


import Form from './Myform'
import Follow from './Follow'

export default function Contact (props) {


  return (
  <section id="contactPage">
     <img src={banner} />
     <div className="formDiv">
        <h1> DO YOU HAVE ANY QUESTIONS?</h1>
        <h1> CONTACT US!</h1>
        <Form className="inputFields" />
     </div>
     <div className="contactImgs">
        <img id="tBoneContact" src={tBone} />
        <img src={hay} />
      </div>
      
      <div className="grid">

    <div className="row1Contact">
      <img className="houseContact" src={barn} alt="house"></img >
      <div className="followUsContact">
         <h1 className="magenta mb-4">FOLLOW US ON</h1>
         <h1 className="magenta mb-4">YOUTUBE AND TICKTOK</h1>
         <div className="contactLinkWrap">
         <a href="https://www.youtube.com/channel/UCkalsK7iUBi29AfUjSI_P4w" target="_blank"><img className="contactFollowLinks"  src={youtubeLogo} /></a>
         <a href="https://www.tiktok.com/@sugarrushjams?lang=en" target="_blank"><img className="contactFollowLinks" src={tiktokLogo} /></a>
         </div>
      </div>
    </div>

    <div className="row2Contact">
      <img className="houseContact" src={house} alt="house"></img >
    </div>

    </div>

      <div className="bottomGrid">
         <img id="wackyContact" src={wacky} />
      </div>
  </section>
  );
}