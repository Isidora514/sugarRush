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
      
      <div id="aboutBanner">
        <img src={banner} alt="farm" />
      </div>

      <div className="aLittleMore blue-bg">
        <h1>A LITTLE MORE</h1>
        <h1>ABOUT SUGAR RUSH JAMS!</h1>
        <p>{content[0]}</p>
      </div>

      <h3 className="magenta farmer">STARRING THE</h3>
      <h3 className="followingCast magenta farmer">FOLLOWING CAST:</h3>
      <div id="chickRoute" className="chikSection">
        <div className="aboutImgWrap" id="chickRoute">
          <img src={chikita} />
        </div>

        <div id="chikitaAbout" className="magenta-bg aboutDesc">
          <h1>CHIKITA THE CHICKEN</h1>
          <p>{data.chikita.bio}</p>
        </div>
      </div>

      {/* coco */}

      <div id="cowRoute" className="cocoSection">
        <div className="aboutImgWrap">
          <img src={coco} />
        </div>

        <div id="cocoAbout" className="teal-bg aboutDesc">
          <h1>COCO THE COW</h1>
          <p>{data.coco.bio}</p>
        </div>
      </div>

      {/* Follow */}

      <section id="followSection">
    <h1 className='magenta farmer'> FOLLOW US ON TIKTOK! </h1>
    <div className="followLinks">
    <a href="https://www.tiktok.com/@sugarrushjams?lang=en" target="_blank"><img className="tiktokLogo" src={tikTok} /></a>
    <div className="chickAndBench">
    <div id="lilChickOnBench">
    <img src={poussin}  />
    </div>
    <div id="lilBench">
    <img src={bench} />
    </div>
    </div>
    </div>
    </section>

   {/* TBONE */}

   <div id="dogRoute" className="tBoneSection">
        <div className="aboutImgWrap">
          <img id="jumpingTBone" src={tBone} />
        </div>

        <div id="tBoneAbout" className="blue-bg aboutDesc">
          <h1>T-BONE THE DOG</h1>
          <p>{data.tBone.bio}</p>
        </div>
      </div>

      {/* HENWEE */}

      <div id="horseRoute" className="henweeSection">
        <div className="aboutImgWrap">
          <img src={henwee} />
        </div>

        <div id="henweeAbout" className="yellow-bg aboutDesc">
          <h1>HENWEE THE HORSE</h1>
          <p>{data.henwee.bio}</p>
        </div>
      </div>

      <section id="followSection">
        <h1 className='magenta farmer'> FOLLOW US ON YOUTUBE!</h1>
        <div className="followLinks">
          <div className="twoChickOnBench">
            <div id="poussinClo">
              <img src={poussin} />
            </div>
            <div id="poussinClo2">
              <img src={poussin} />
            </div>
            <div id="cloture">
              <img src={cloture}/>
            </div>
          </div>
        <a href="https://www.youtube.com/channel/UCkalsK7iUBi29AfUjSI_P4w" target="_blank"><img  className="youtubeLogo" src={youTube} /></a>
        </div>
      </section>

      {/* WHACKY */}

      <div id="duckRoute" className="duckSection">
        <div className="aboutImgWrap">
          <img src={wacky} />
        </div>

        <div id="duckAbout" className="purple-bg aboutDesc">
          <h1>WACKY DACKY THE DUCK</h1>
          <p>{data.whacky.bio}</p>
        </div>
      </div>

      {/* Brooster */}

      <div id="broosterRoute" className="broosterSection">
        <div className="aboutImgWrap">
          <img src={brooster} />
        </div>

        <div id="broosterAbout" className="green-bg aboutDesc">
          <h1>BROOSTER THE ROOSTER</h1>
          <p>{data.brooster.bio}</p>
        </div>
      </div>

      <div id="landscape">
      <img src={landscape}/>
      </div>
      <div className="madeByAbout blue-bg">
        <h2>"MADE BY KIDS FOR KIDS!"</h2>
        <p>More information coming soon!</p>
      </div>
      <div className="moreFriendsAndButton">
      <h2 className="targeth2 magenta farmer">MORE FRIENDS COMING SOON!</h2>
      <h2 className="targeth2 magenta farmer">???</h2>
      <HomeButton />
      </div>
      <Footer />


  </section>
    );
}