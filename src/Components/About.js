import React, { Component } from 'react';
import homeButton from './Homebutton'
import Footer from './Footer'

import data from './data/data.json'
import banner from "../images/about/About-banner.png";
import landscape from "../images/about/landscape-foin-sceau-about.png"

import tikTok from '../images/TikTok.png'
import youTube from '../images/youtube-icon.png'

import poussin from "../images/about/poussin-about.png"
import bench from "../images/about/bench-about.png"

import cloture from "../images/about/cloture-barn.png"

import chikita from "../images/about/chikita-about.png"
import coco from "../images/about/Coco-about.png"
import tBone from "../images/about/t-bone-dog-about.png"
import henwee from "../images/about/Henwee-cowboy-about.png"
import wacky from "../images/about/Wacky-duck-about.png"
import brooster from "../images/about/Brooster-Rooster-about.png"
import HomeButton from './Homebutton';

export default function About (props) {

  const content = [
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,  line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. '
  ]

    return (
  <section id="aboutPage">
      
      <div>
        <img id="AboutBanner" src={banner} alt="farm" />
      </div>

      <div className="aLittleMore blue-bg">
        <h1>A LITTLE MORE</h1>
        <h1>ABOUT SUGAR RUSH JAMS!</h1>
        <p>{content[0]}</p>
      </div>

      <h3 className="magenta farmer">STARRING THE</h3>
      <h3 className="magenta farmer">FOLLOWING CAST:</h3>
      <div id="chickRoute" className="chikSection">
        <div id="chickRoute">
          <img src={chikita} />
        </div>

        <div id="chikitaAbout" className="magenta-bg">
          <h1>CHIKITA THE CHICKEN</h1>
          <h2>{data.chikita.bio}</h2>
        </div>
      </div>

      {/* coco */}

      <div id="cowRoute" className="cocoSection">
        <div>
          <img src={coco} />
        </div>

        <div id="cocoAbout" className="teal-bg">
          <h1>COCO THE COW</h1>
          <h2>{data.coco.bio}</h2>
        </div>
      </div>

      {/* Follow */}

      <section id="followSection">
    <h1 className='magenta'> Follow us on Tiktok! </h1>
    <div className="followLinks">
    <a href="https://www.tiktok.com/@sugarrushjams?lang=en" target="_blank"><img className="tiktokLogo" src={tikTok} /></a>
    <img src={poussin} id="lilChickOnBench" />
    <img src={bench} id="lilChickBench" />
    </div>
    </section>

   {/* TBONE */}

   <div id="dogRoute" className="tBoneSection">
        <div>
          <img id="jumpingTBone" src={tBone} />
        </div>

        <div id="tBoneAbout" className="blue-bg">
          <h1>T-BONE THE DOG</h1>
          <h2>{data.tBone.bio}</h2>
        </div>
      </div>

      {/* HENWEE */}

      <div id="horseRoute" className="henweeSection">
        <div>
          <img src={henwee} />
        </div>

        <div id="henweeAbout" className="yellow-bg">
          <h1>HENWEE THE HORSE</h1>
          <h2>{data.henwee.bio}</h2>
        </div>
      </div>

      <section id="followSection">
        <h1 className='magenta'> Follow us on Youtube!</h1>
        <div className="followLinks">
          <img id="poussinClo" src={poussin} />
          <img id="poussinClo2" src={poussin} />
          <img id="cloture" src={cloture}/>
        <a href="https://www.youtube.com/channel/UCkalsK7iUBi29AfUjSI_P4w" target="_blank"><img  className="youtubeLogo" src={youTube} /></a>
        </div>
      </section>

      {/* WHACKY */}

      <div id="duckRoute" className="duckSection">
        <div>
          <img src={wacky} />
        </div>

        <div id="duckAbout" className="purple-bg">
          <h1>WACKY DACKY THE DUCK</h1>
          <h2>{data.whacky.bio}</h2>
        </div>
      </div>

      {/* Brooster */}

      <div id="broosterRoute" className="broosterSection">
        <div>
          <img src={brooster} />
        </div>

        <div id="broosterAbout" className="green-bg">
          <h1>BROOSTER THE ROOSTER</h1>
          <h2>{data.brooster.bio}</h2>
        </div>
      </div>

      <img id="landscape" src={landscape}/>
      <div className="madeByAbout blue-bg">
        <h1>"MADE BY KIDS FOR KIDS!"</h1>
        <p>More information coming soon!</p>
      </div>
      <div className="moreFriendsAndButton">
      <h1 className="magenta farmer">MORE FRIENDS COMING SOON!</h1>
      <HomeButton />
      </div>
      <Footer />


  </section>
    );
}