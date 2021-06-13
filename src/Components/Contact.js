import React, { Component } from 'react';

import youtubeLogo from '../images/youtube-icon.png';
import tiktokLogo from '../images/TikTok.png';
import footerAnimals from '../images/home/Footer-animals.png'; 
import barn from "../images/contact/barn-contact-1.png"
import house from "../images/contact/House-contact.png"
import banner from "../images/contact/banner-contact.png"


import Form from './Myform'

export default function Contact (props) {


  return (
  <section id="contactPage">
     <img src={banner} />
     <div className="formDiv">
        <h1> DO YOU HAVE ANY QUESTIONS?</h1>
        <h1> CONTACT US!</h1>
        <Form className="inputFields" />
     </div>
      <div className="topGrid">
         <img scr={barn} />
         <img scr={house} />
      </div>
      <div className="bottomGrid">
      </div>
  </section>
  );
}