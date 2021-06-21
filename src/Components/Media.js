import React, { Component } from 'react';
import data from './data/data.json'

import Footer from './Footer'

import banner from "../images/media/Banner-mediae.png";
import dogDancing from "../images/media/dog-dancing-media.png";

import artVirgin from '../images/media/jpeg/cockadoo-virgin-Rdio.jpg'
import artGlobal from '../images/media/cockadoo-global-news.png'
import artCityNews from '../images/media/jpeg/2bros-city-news.jpeg'
import artGazette from '../images/media/jpeg/Laval-fam-MTL-Gazette.jpg'
import artCjad from '../images/media/jpeg/bbshark-cock-doo-CJAD.jpg'

import globalNews from '../images/media/logo-icons-press/Global-News.png'
import cjad from '../images/media/logo-icons-press/CJAD.png'
import mtlGazette from '../images/media/logo-icons-press/MTL-Gazette.png'
import virgin from '../images/media/logo-icons-press/Virgin.png'
import cityNews from '../images/media/logo-icons-press/city-news.png'


export default function About (props) {

  const articles = [
  'A brand new kids song that will be the new baby shark, how you can make your ice coffee a million times better, and no more tipping at restaurants?...',
  "t's just made its big world premiere with a snazzy animated video. ... “I made up by myself,” the now 8-year-old Aiden confirmed to Global News. ... Cock-A-​Doodle-Time has already had play on local radio…",
  "Montreal boy writes catchy kids song at age 7 with help of younger brother. Seven-year-old Aiden and his five-year-old brother Noah came up with a song one night while getting ready for bed…",
  "Cock-a-Doodle Time: Laval family creates a song after eight-year-old 'just made it up in his head' … for Cock-a-Doodle Time, which was set to debut on YouTube Friday morning.",
  "Could two Montreal brothers be on their way to creating the next Baby Shark? Ali Avsar & his son Aiden Avsar, who's 7 years old ..."
]


    return (
      <section id="mediaPage">
      <div id="mediaBanner">
         <img className="aniPics" src={banner} alt="farm" />
      </div>
      
      <div className="pressRoomSection blue-bg">
        <h1 className="farmer">COCK A DOODLE TIME -PRESS ROOM</h1>
      </div>

      <div className="featuredSection">
        <h1 className="magenta farmer">AS FEATURED ON:</h1>
        <div className="featuredImgs">
          <img src={globalNews} />
          <img src={cjad} />
          <img src={mtlGazette} />
        </div>
        <div className="featuredImgs">
          <img src={virgin} />
          <img src={cityNews} />
        </div>
      </div>

      <section className="articleSection">
        <h2><b>ARTICLES</b></h2>

        <div className="mediaArticles">
          <a href="https://www.iheartradio.ca/virginradio/montreal/audio-video/the-new-baby-shark-1.15351110"><img src={artVirgin} /></a>

          <div classname="textDivs">
            <h3>Virgin Radio</h3>
            <h3>THE NEW BABY SHARK!</h3>
            <p>{articles[0]}</p>
          </div>
        </div>

        <div className="mediaArticles">
          <a href="https://globalnews.ca/news/7922304/could-this-montreal-made-earworm-become-the-next-baby-shark/"><img src={artGlobal} /></a>

          <div classname="textDivs">
            <h3>Global News</h3>
            <h3>Could this Montreal-made earworm become the next 'baby Shark'</h3>
            <p>{articles[1]}</p>
          </div>
        </div>

        <div className="mediaArticles">
        <a href="https://montreal.citynews.ca/2021/06/05/montreal-boy-writes-catchy-kids-song-at-age-7-with-help-of-younger-brother/"><img src={artCityNews} /></a>

          <div classname="textDivs">
            <h3>City News Montreal</h3>
            <h3>Montreal boy writes catchy kids song at age 7 with help of younger brother</h3>
            <p>{articles[2]}</p>
          </div>
        </div>

        <div className="mediaArticles">
          <a href="https://montrealgazette.com/entertainment/its-cock-a-doodle-time-laval-familys-song-for-kids-debuts-friday-morning"><img src={artGazette} /></a>

          <div classname="textDivs">
            <h3>Montreal Gazette</h3>
            <h3>It's Cock-a-Doodle Time: Laval family's song for kids debuts Friday morning</h3>
            <p>{articles[3]}</p>
          </div>
        </div>

        <div className="mediaArticles">
          <a href="https://www.iheartradio.ca/cjad/audio/could-two-montreal-brothers-be-on-their-way-to-creating-the-next-baby-shark-1.15352266?mode=Article"><img src={artCjad} /></a>

          <div classname="textDivs">
            <h3><b>CJAD - Elias Makos Show</b></h3>
            <h3>Could two Montreal borthers be on their way to creating the next Baby Shark?</h3>
            <p>{articles[4]}</p>
          </div>
        </div>

      </section>
      <div id="dogDancing">
      <img src={dogDancing} />
      </div>
      <Footer />
   </section>
    );
}