import React, { useState, useEffect} from 'react';
import abreuvoir from '../images/home/abreuvoir.png';

export default function Videos(props) {
  const videolist = [
  <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/los4K5cif30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, 
  <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/1SK2-Mzfp24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>]
// let index =0 

const [currentVideo, setCurrentVideo] = useState(0);
const [video, setVideo] = useState([videolist[currentVideo]])

const [nextFirst, setNextFirst] = useState(1); 
const [nextSecond, setNextSecond] = useState(2); 
const [nextThird, setNextThird] = useState(3); 
const [nextFourth, setNextFourth] = useState(4); 

const [PrevFirst, setPrevFirst] = useState(1); 
const [PrevSecond, setPrevSecond] = useState(2); 
const [PrevThird, setPrevThird] = useState(3); 
const [PrevFourth, setPrevFourth] = useState(4); 

const goToNextVideo = () => {

  let counter = currentVideo;

  console.log("next", currentVideo);
  setCurrentVideo( currentVideo + 1);
  
  console.log("next 2", currentVideo);

 

 let first = counter + 2;
  let second = counter + 3;
  let third = counter + 4;
  let fourth = counter + 5;

  if (fourth >= videolist.length){
    fourth = 0;
  }


 setNextFirst(first)
 setNextSecond(second);
 setNextThird(third);
 setNextFourth(fourth);
 
}

const goToPrevVideo = () => {

  let counter = currentVideo;

  console.log("next", currentVideo);
  setCurrentVideo( currentVideo - 1);
  
  console.log("next 2", currentVideo);

  let first = counter + 2;
  let second = counter + 3;
  let third = counter + 4;
  let fourth = counter + 5;

  if (currentVideo <= 0){
    first = fourth;
  }
 
}


  return (
    <section className="videoSection">

      <div className="topDiv">
        <div id="imgDiv">
        <img src={abreuvoir} />
        </div>
        <h1 className="magenta farmer">More Youtube videos</h1>
      </div>

      <div className="moreVidSection">          
          {videolist[0]}
          {videolist[1]}
      </div>

    </section>
  )
}