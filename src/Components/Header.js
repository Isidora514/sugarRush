import React, { Component } from 'react';

import smallChicken from "../images/home/Poussins.png";
import banner from "../images/home/Home-banner.png"
import data from './data/data.json'

export default function Header(props) {

const content = [
  "SugarRushJams was created by Aiden-7 with the help of his brother Noah-5. Together they wrote the song named Cock A Doodle Time in early 2021. Their dad made them a promise, if they completed the song,  he would have it recorded. A few weeks later, the song was recorded and a family friend upon hearing it, made the animation with the characters that the kids and their dad had made.",
  "What started out as a Fun Family project to creatively pass the time during the lockdown, Aiden and Noad have become local celebrities and they plan to continue creating a wide variety of family content by Kids for Kids.", 
  "Stay tuned for more great updates!"
]

console.log(smallChicken)

  return(
    <header>
      <img id="headerBanner" src={banner}/>
      <div className="welcomeDiv blue-bg">
        <h1>SUGAR RUSH JAMS - ENTERTAINMENT, MUSIC AND EDUCATIONAL CHANNEL FOR KIDS!</h1>
        <p className="welcomeText">{content[0]}</p>
        <p className="welcomeText">{content[1]}</p>
        <p className="welcomeText">{content[2]}</p>
      </div>
      <div id="videoDiv">
        <div className="chicken">
         <img src={data.smallChick.img} />
         </div>
      <iframe id="videoWindow" src="https://www.youtube.com/embed/los4K5cif30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </header>
  ) 
}