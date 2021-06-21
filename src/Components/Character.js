import React from "react";
import data from './data/data.json'

// IMPORTS FOR COMPONENTS 
import Story from './Story'
import Videos from './Videos'
import Lyrics from './Lyrics'
import Footer from './Footer'

import tikTok from '../images/TikTok.png'
import youTube from '../images/youtube-icon.png'

import potato from '../images/home/Potato-bag.png'
import potato2 from '../images/home/Potato-bag-smaller.png'
import chikita from '../images/home/chickita-hands-up.png'
import coco from '../images/home/Coco-Cow-animation.png'
import tBone from '../images/home/t-bone-dog.png'
import henwee from '../images/home/Henwee-Horse.png'
import wackyDucky from '../images/home/Wacky-ducky.png'
import broosterRooster from '../images/home/Brooster-Rooster.png'

export default function Characters(props) {

  // will use to store description once received

  return (
    <section className="characterSection">

      <div className="charDiv">
        <div className="imgAndName">
          <div className="charImgDivs">
          <img id="chickitaImg" src={chikita} />
          </div>
          <h1 className="magenta nameLeft farmer">Chikita</h1>
        </div>
        <div className="descBox magenta-bg left">
          <h2 className="funFacts">FUN FACTS</h2>
          <li>SASSY</li>
          <li>CURIOUS</li>
          <li>FUN</li>
          <li>PRANKSTER</li>
          <div className="buttonDiv">
          <a href="/about/#chickRoute"><button class="btn btn-primary btn-lg magenta"><h2 className="magenta">Learn more about me!</h2></button></a>
          </div>
        </div>
      </div>
      
      <div className="charDiv col">
        <div className="descBox teal-bg">
        <h2 className="funFacts">FUN FACTS</h2>
          <li>ELDERLY & WISE</li>
          <li>BEST DANCE MOVES</li>
          <li>MOM OF THE GROUP</li>
          <div className="buttonDiv">
          <a href="/about/#cowRoute"><button class="btn btn-primary btn-lg teal"><h2 className="teal">Learn more about me!</h2></button></a>
          </div>
        </div>
        <div className="imgAndName">
          <div className="charImgDivs">
          <img id="cocoImg" src={coco} alt="coco" />
          </div>
          <h1 className="teal right farmer">COCO</h1>
        </div>
      </div>

      <div className="charDiv">
        <div className="imgAndName">
          <div className="charImgDivBone">
          <img id="tBoneImg" src={tBone} />
          </div>
          <h1 className="blue nameLeft farmer">T-BONE</h1>
        </div>
        <div className="descBox blue-bg">
        <h2 className="funFacts">FUN FACTS</h2>
          <li>BIG PERSONALITY</li>
          <li>LOVES BONES</li>
          <li>SAYS HE'S A CHIHUAHUA</li>
          <div className="buttonDiv">
          <a href="/about/#dogRoute"><button class="btn btn-primary btn-lg blue"><h2 className="blue">Learn more about me!</h2></button></a>
          </div>
        </div>
      </div>

      <div className="charDiv col">
        <div className="descBox yellow-bg">
        <h2 className="funFacts">FUN FACTS</h2>
          <li>BIG ADVENTURER</li>
          <li>LOVES THROWING PARTIES</li>
          <li>COUNTRY MUSIC FAN</li>
          <li>IN LOVE WITH VEGGIES</li>
          <div className="buttonDiv">
          <a href="/about/#horseRoute"><button class="btn btn-primary btn-lg yellow"><h2 className="yellow">Learn more about me!</h2></button></a>
          </div>
        </div>
        <div className="imgAndName">
          <div className="charImgDivs">
          <img id="henweeImg" src={henwee} alt="henwee"></img>
          </div>
          <h1 className="yellow right farmer">HENWEE</h1>
        </div>
      </div>

      <div className="charDiv">
        <div className="imgAndName">
          <div className="charImgDivs">
          <img id="wackyImg" src={wackyDucky} />
          </div>
          <h1 className="purple nameLeft farmer">WACKY DACKY</h1>
        </div>
        <div className="descBox purple-bg">
        <h2 className="funFacts">FUN FACTS</h2>
          <li>LOVES TO QUACK</li>
          <li>VERY LUCKY</li>
          <li>FRIENDLY AND HUGGABLE</li>
          <div className="buttonDiv">
          <a href="/about/#duckRoute"><button class="btn btn-primary btn-lg purple"><h2 className="purple">Learn more about me!</h2></button></a>
          </div>
        </div>
      </div>

      <div className="charDiv col">
        <div className="descBox green-bg">
        <h2 className="funFacts">FUN FACTS</h2>
          <li>EVERYONE'S ALARM CLOCK</li>
          <li>LOVES TO LEARN</li>
          <li>LOVES TO PLAY AND SING</li>
          <div className="buttonDiv">
          <a href="/about/#broosterRoute"><button class="btn btn-primary btn-lg green"><h2 className="green">Learn more about me!</h2></button></a>
          </div>
        </div>
        <div className="imgAndName">
          <div className="charImgDivRooster">
          <img id="broosterImg" src={broosterRooster} alt="BROOSTER"></img>
          </div>
          <h1 className="green right farmer">BROOSTER</h1>
        </div>
      </div>

      <Videos />
      <Lyrics />

  <section id="followSection">
    <h1 className='magenta farmer font80'> FOLLOW US ON TIKTOK AND YOUTUBE! </h1>
    <div className="followLinks"> 
    <img src={potato} id="potatoBag" />
    <a href="https://www.tiktok.com/@sugarrushjams?lang=en" target="_blank"><img className="tiktokLogo" src={tikTok} /></a>
    <a href="https://www.youtube.com/channel/UCkalsK7iUBi29AfUjSI_P4w" target="_blank"><img  className="youtubeLogo" src={youTube} /></a>
    <img src={potato2} id="potatoBag2" />
    </div>
  </section>

  <Story />
  <Footer />

    </section>
  )
}