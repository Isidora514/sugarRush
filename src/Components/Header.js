import React, { Component } from 'react';
import smallChicken from "../images/home/Poussins.png";
import banner from "../images/home/Home-banner.png";

export default function Header (props) {


   const welcomeText = [
   
      "Welcome to Sugar Rush Jams entertainment, music and educational channel for kids.",
      "SugarRushJams was created by Aiden-7 with the help of his brother Noah-5. Together they wrote the song named CockADoodle Time in early 2021.",
      "Their Dad, made them promise, if they completed the song, he would have it recorded. A few Weeks later, the song was recorded and a family friend upon hearing it, made the animation with the characters that the kids and their dad had made.",
      "for the latest videos, updates, and surprises, visit our social media channels: Tiktok, Facebook to see what Aiden and Noad will come up with next.", 
      "What started out as a Fun Family project to creatively pass the time during lockdown, Aiden and Noah have become local celebrities and they plan to continue creating a wide variety of family content by Kids for Kids. Stay tuned for more great updates."
   ]


    return (
      <header id="home">
      <div className='bannerDiv'>
         <img src={banner} id="banner" />
      </div>
      <div id="description" className="text-white">
         <h1>Welcome!</h1>
         <p>{welcomeText[0]}</p>
         <p>{welcomeText[1]}</p>
         <p>{welcomeText[2]}</p>
         <p>{welcomeText[3]}</p>
         <p>{welcomeText[4]}</p>
      </div>
      <div id="videodiv">
         <img className="chicken" src={smallChicken} />
      <iframe id="videoWindow" width="560" height="315" src="https://www.youtube.com/embed/los4K5cif30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
   </header>
    );
}
