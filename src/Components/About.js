import React, { Component } from 'react';
import data from './data/data.json'
import banner from "../images/about/About-banner.png";
import landscape from "../images/about/landscape-foin-sceau-about.png"
import Follow from "./Follow"


import chikita from "../images/about/chikita-about.png"
import coco from "../images/home/Coco-Cow-animation.png"
import tBone from "../images/home/t-bone-dog.png"
import henwee from "../images/home/Henwee-Horse.png"
import wacky from "../images/home/Wacky-ducky.png"
import brooster from "../images/home/Brooster-Rooster.png"

export default function About (props) {

  const story = [
  'Out of the boredom of the 2021 lockdown year, brought out the creative talent of a 7 year old boy from Montreal. Aiden went to his parents singing “Cock a Doodle Doodle DOODLE!”. When his parents asked him where he had heard the song, and searching all over, it turns out indeed Aiden had come up with the lyrics and beat in his own time and mind. Eventually and with his 5 year old brother Noah, they thought about the different animals they liked to be part of the song, and came about to develop the lyrics and chorus to what’s now “It’s Cock-A-Doodle-Time!”', 
  'Their mom and dad, finding the beat catchy, approached a local musician, Isabelle Banos. Loving the idea of the 2 brothers creating a catchy song in their spare time, she took on the project and brought the song into life with her wonderful voice.',
  'Aiden’s father, Ali Avsar, who always was passionate about children’s books, both educational and musical content, brought on his good friend Harry, who fell in love with the song immediately. Harry shared Ali’s vision about the song and reaching out to children through positive reinforcement, worked with Ali and the kids to develop the animation for the song, in what they plan to have many sequels. The families whose kids went to the same daycare, got closer during the pandemic through song, their kids pure love for animals, and a vision of the future of children’s education in general.',
  'Through the song as a first step, the fathers hope to bring back good educational content, uncomplicated children’s leisure time from online games to more traditional family and social games which are educational and have sold teachings as they did in the past, with a twist of the now and a look at the future.”'
]


    return (
      <section id="aboutPage">
      <div>
         <img className="aniPics" id="aboutBanner" src={banner} alt="farm" />
      </div>
      <div className="aboutSection">
        <h1> Made by Parents <br/> that behave like children! </h1>
        <p>{story[0]}</p>
        <p>{story[1]}</p>

      </div>
      <div className="aboutAnimals">
      <div id="chikitaRoute" className="chikita">
        <img className="aniPics" id="chikitaImage" src={chikita} alt="bigchicken" />
        <div className="aboutDescriptions">
        <h1>CHIKITA</h1>
        <h1>THE CHICKEN</h1>
        <p>{data.characters.chikita}</p>
        </div>
      </div>

      <div className="coco">
        <img className="aniPics" id="cocoImage" src={coco} alt="COW" />
        <div className="aboutDescriptions">
        <h1>Coco the cow</h1>
        <p>{data.characters.coco}</p>
        </div>
      </div>

      <div className="tBone">
        <img className="aniPics" id="tBoneImage" src={tBone} alt="DOG" />
        <div className="aboutDescriptions">
        <h1>T-Bone the dog</h1>
        <p>{data.characters.tBone}</p>
        </div>
      </div>


      <div className="henwee">
        <img className="aniPics" id="henweeImage" src={henwee} alt="Horse" />
        <div className="aboutDescriptions">
        <h1>Henwee the horse</h1>
        <p>{data.characters.henwee}</p>
        </div>
      </div>
      <Follow />
      <div className="wacky">
        <img className="aniPics" id="wackyImage" src={wacky} alt="DUCK" />
        <div className="aboutDescriptions">
        <h1>Whacky Dacky the duck</h1>
        <p>{data.characters.whacky}</p>
        </div>
      </div>

      <div className="rooster">
        <img className="aniPics" id="broosterImage" src={brooster} alt="Rooster" />
        <div className="aboutDescriptions">
        <h1> Brooster the Rooster</h1>
        <p>{data.characters.brooster}</p>
        </div>
      </div>
      </div>
      <img id="landscapeBanner" src={landscape}></img>
   </section>
    );
}