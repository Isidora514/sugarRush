import React from "react";
import bigChicken from "../images/home/Brooster-Rooster-2.png";
import abreuvoir from '../images/home/abreuvoir.png'; 



export default function Story(props) {

  const content = [
    "Out of the boredom of the 2021 lockdown year, brought out the creative talent of a 7 year old boy from Montreal.",
    'Aiden went to his parents singing “Cock a Doodle Doodle DOODLE!”. When his parents asked him where he had heard the song, and searching all over, it turns out indeed Aiden had come up with the lyrics and beat in his own time and mind. Eventually and with his 5 year old brother Noah, they thought about the different animals they liked to be part of the song, and came about to develop the lyrics and chorus to what’s now “It’s Cock-A-Doodle-Time!”',
    'Their mom and dad, finding the beat catchy, approached a local musician, Isabelle Banos. Loving the idea of the 2 brothers creating a catchy song in their spare time, she took on the project and brought the song into life with her wonderful voice.'
  ]

  const story = [
    'Aiden’s father, Ali Avsar, who always was passionate about children’s books, both educational and musical content, brought on his good friend Harry, who fell in love with the song immediately. Harry shared Ali’s vision about the song and reaching out to children through positive reinforcement, worked with Ali and the kids to develop the animation for the song, in what they plan to have many sequels. The families whose kids went to the same daycare, got closer during the pandemic through song, their kids pure love for animals, and a vision of the future of children’s education in general', 
    'Through the song as a first step, the fathers hope to bring back good educational content, uncomplicated children’s leisure time from online games to more traditional family and social games which are educational and have sold teachings as they did in the past, with a twist of the now and a look at the future'
  ]

  return (
    <section className="storySection">

    <div className="whySugarRush">
      <div className="blue-bg px-5 pb-5"> 
        <h1 className="text-white pb-3 ">HOW IT ALL STARTED</h1>
        <p className="text-left">{content[0]}</p>
        <p className="text-left">{content[1]}</p>
        <p className="text-left">{content[2]}</p>
      </div>
    </div>

    <div className='midImageDiv'>
    <img className="midImage" src={bigChicken} alt="bigchicken" />
    </div>

    <div className="historyWithSon">
      <div className="magenta-bg px-5 pb-2"> 
      <h1 color="#ffff">...AND THEN</h1>
      <p>{story[0]}</p>
      <p>{story[1]}</p>
      </div>
    </div>

    </section>
  )
}