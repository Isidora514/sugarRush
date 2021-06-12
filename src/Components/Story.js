import React from "react";
import bigChicken from "../images/home/Brooster-Rooster-2.png";
import footerAnimals from '../images/home/Footer-animals.png'; 


export default function Story(props) {

  const content = [
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  ]

  const story = [
    'Out of the boredom of the 2021 lockdown year, brought out the creative talent of a 7 year old boy from Montreal. Aiden went to his parents singing “Cock a Doodle Doodle DOODLE!”. When his parents asked him where he had heard the song, and searching all over, it turns out indeed Aiden had come up with the lyrics and beat in his own time and mind. Eventually and with his 5 year old brother Noah, they thought about the different animals they liked to be part of the song, and came about to develop the lyrics and chorus to what’s now “It’s Cock-A-Doodle-Time!”', 
    'Their mom and dad, finding the beat catchy, approached a local musician, Isabelle Banos. Loving the idea of the 2 brothers creating a catchy song in their spare time, she took on the project and brought the song into life with her wonderful voice.',
    'Aiden’s father, Ali Avsar, who always was passionate about children’s books, both educational and musical content, brought on his good friend Harry, who fell in love with the song immediately. Harry shared Ali’s vision about the song and reaching out to children through positive reinforcement, worked with Ali and the kids to develop the animation for the song, in what they plan to have many sequels. The families whose kids went to the same daycare, got closer during the pandemic through song, their kids pure love for animals, and a vision of the future of children’s education in general.',
    'Through the song as a first step, the fathers hope to bring back good educational content, uncomplicated children’s leisure time from online games to more traditional family and social games which are educational and have sold teachings as they did in the past, with a twist of the now and a look at the future.”'
  ]

  return (
    <section className="footerSection">

    <div className="whySugarRush">
      <div className="blue-bg px-5 pb-5"> 
        <h1 className="text-white pb-3 ">WHY SUGAR RUSH?</h1>
        <p className="text-left">{content[0]}</p>
      </div>
    </div>

    <div className='midImageDiv'>
    <img className="midImage" src={bigChicken} alt="bigchicken" />
    </div>

    <div className="historyWithSon">
      <div className="magenta-bg px-5 pb-2"> 
      <h1 color="#ffff">ARTICLE: <br /> HISTORY WITH MY SON</h1>
      <p>{story[0]}</p>
      <p>{story[1]}</p>
      <p>{story[2]}</p>
      <p>{story[3]}</p>
      </div>
    </div>

    </section>
  )
}