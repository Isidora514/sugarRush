import React, { Component } from 'react';
import data from './data/data.json'
import banner from "../images/media/Banner-mediae.png";
import dogDancing from "../images/media/dog-dancing-media.png";


import chickenFace from '../images/media/cockadoo-global-news.png'

export default function About (props) {

  const articles = [
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterations in some form, by injected humour, or randomised words which don't look even slightly believable'", 
  'Their mom and dad, finding the beat catchy, approached a local musician, Isabelle Banos. Loving the idea of the 2 brothers creating a catchy song in their spare time, she took on the project and brought the song into life with her wonderful voice.',
  'Aiden’s father, Ali Avsar, who always was passionate about children’s books, both educational and musical content, brought on his good friend Harry, who fell in love with the song immediately. Harry shared Ali’s vision about the song and reaching out to children through positive reinforcement, worked with Ali and the kids to develop the animation for the song, in what they plan to have many sequels. The families whose kids went to the same daycare, got closer during the pandemic through song, their kids pure love for animals, and a vision of the future of children’s education in general.',
  'Through the song as a first step, the fathers hope to bring back good educational content, uncomplicated children’s leisure time from online games to more traditional family and social games which are educational and have sold teachings as they did in the past, with a twist of the now and a look at the future.”'
]


    return (
      <section id="aboutPage">
      <div>
         <img className="aniPics" id="aboutBanner" src={banner} alt="farm" />
      </div>
      
      <div className="pressRoomSection">
        <h1>COCK A DOODLE TIME -PRESS ROOM</h1>
      </div>

      <div className="featuredSection">
        <h1 className="magenta mb-4">AS FEATURED ON:</h1>
        <div className="featuredImgs">
          <img />
          <img />
          <img />
        </div>
        <div className="featuredImgs">
          <img />
          <img />
        </div>
      </div>

      <section className="articleSection">
        <h2>ARTICLES</h2>

        <div className="mediaArticles">
          <img width="400" height="400" scr={chickenFace} />
          <div classname="textDivs">
            <h3>Virgin Radio</h3>
            <h3>THE NEW BABY SHARK!</h3>
            <p>{articles[0]}</p>
          </div>
        </div>

        <div className="mediaArticles">
          <img width="400" height="400" scr={chickenFace} />
          <div classname="textDivs">
            <h3>Global News</h3>
            <h3>Could this Montreal-made earworm become the next 'baby Shark'</h3>
            <p>{articles[0]}</p>
          </div>
        </div>

        <div className="mediaArticles">
          <img width="400" height="400" scr={chickenFace} />
          <div classname="textDivs">
            <h3>City News Montreal</h3>
            <h3>Montreal boy writes catchy kids song at age 7 with help of younger brother</h3>
            <p>{articles[0]}</p>
          </div>
        </div>

        <div className="mediaArticles">
          <img width="400" height="400" scr={chickenFace} />
          <div classname="textDivs">
            <h3>Montreal Gazette</h3>
            <h3>It's Cock-a-Doodle Time: Laval family's song for kids debuts Friday morning</h3>
            <p>{articles[0]}</p>
          </div>
        </div>
      </section>
      <img src={dogDancing} />
      <div id="dogDancing">
      </div>
   </section>
    );
}