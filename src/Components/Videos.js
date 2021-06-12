import React, { useState, useEffect} from 'react';

export default function Videos(props) {
  const videolist = [
  <iframe className="vids" src="https://www.youtube.com/embed/los4K5cif30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, 
  <iframe className="vids" src="https://www.youtube.com/embed/4wEO_JuON9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, 
  <iframe className="vids" src="https://www.youtube.com/embed/ap90npnxZzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe className="vids" src="https://www.youtube.com/embed/ap90npnxZzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  <iframe className="vids" src="https://www.youtube.com/embed/ap90npnxZzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
]
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
      <div>
      <h1 className="magenta">More Youtube videos</h1>
      </div>
      <div className="currentVideoWrapper">
          {/* <button className="btn btn-transparent magenta" onClick={()=> goToPrevVideo()} > Previous </button> */}
          
          <div className="Currentvideo mx-5">
          {videolist[currentVideo]}
          </div>

          {/* Place fontawesome arrow in here */}
          {/* <button className="btn btn-transparent magenta" onClick={()=> goToNextVideo()} > Next</button> */}
      </div>

        <div className="nextVids">
          <div className="divRow1">
          {videolist[nextFirst]}
          {videolist[nextSecond]}
          </div>
          <div className="divRow2">
          {videolist[nextThird]}
          {videolist[nextFourth]}
          </div>
        </div>
    </section>
  )
}