import React from "react";
import data from './data/data.json'



//character imports
import chikita from "../images/home/chickita-hands-up.png"
import coco from "../images/home/Coco-Cow-animation.png"
import tBone from "../images/home/t-bone-dog.png"
import henwee from "../images/home/Henwee-Horse.png"
import wacky from "../images/home/Wacky-ducky.png"
import brooster from "../images/home/Brooster-Rooster.png"


export default function Characters(props) {

  // will use to store description once received


  return (
    <section className="characterSection">

<div className="characterDivs">
      <div className="imageHolder">
          <h2 className="roboto" id="chickitaName" className="magenta bolder">CHICKITA</h2>
          <img id="chickita" src={chikita} alt="chickita"></img >
        </div>
      <div className="descBox magenta-bg"> 
      <div className="desc text-white"> 
        {data.characters.chikita}
      </div>
      <button class="btn btn-primary btn-lg magenta">Learn more about me!</button>
      </div>
    </div>

    <div className="characterDivs">
      <div className="descBox teal-bg">  
      <div className="desc text-white"> 
        {data.characters.coco}
      </div>
      <button type="button" class="btn btn-primary btn-lg teal">Learn more about me!</button>
      </div>
      <div className="imageHolder">
          <h2 className="roboto" id="cocoName" className="teal">COCO</h2>
          <img id="coco" src={coco} alt="coco"></img >
        </div>
    </div>

    <div className="characterDivs">
    <div className="imageHolder">
          <h2 class="blue">T-BONE</h2>
          <img id="tBone" src={tBone} alt="tbone"></img >
        </div>
       <div className="descBox blue-bg">  
       <div className="desc text-white"> 
        {data.characters.tBone}
      </div>
      <button type="button" class="btn btn-primary btn-lg blue">Learn more about me!</button>
        </div>
    </div>

    <div className="characterDivs">
      <div className="descBox lime-bg" >  
      <div className="desc text-white"> 
        {data.characters.henwee}
      </div>
      <button type="button" class="btn btn-primary btn-lg lime">Learn more about me!</button>
        </div>
        <div className="imageHolder">
          <h2 className="roboto" className="lime">HENWEE</h2>
          <img id="henwee" src={henwee} alt="henwee"></img >
        </div>
    </div>

    <div className="characterDivs">
    <div className="imageHolder">
          <h2 className="roboto" className="purple">WACKY DACKY</h2>
          <img id="wacky" src={wacky} alt="wacky"></img >
        </div>
      <div className="descBox purple-bg">  
      <div className="desc text-white"> 
        {data.characters.whacky}
      </div>
      <button type="button" class="btn btn-primary btn-lg purple">Learn more about me!</button>
        </div>
    </div>

    <div className="characterDivs">
      <div className="descBox green-bg">  
      <div className="desc text-white"> 
        {data.characters.brooster}
      </div>
      <button type="button" class="btn btn-primary btn-lg green">Learn more about me!</button>
        </div>
        <div className="imageHolder">
          <h2 className="roboto" className="green">BROOSTER</h2>
          <img id="brooster" src={brooster} alt="Rooster"></img >
        </div>
    </div>

    </section>
  )
}