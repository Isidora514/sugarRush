import React, { Component } from 'react';

export default function About (props) {

  const story = [
  'Out of the boredom of the 2021 lockdown year, brought out the creative talent of a 7 year old boy from Montreal. Aiden went to his parents singing “Cock a Doodle Doodle DOODLE!”. When his parents asked him where he had heard the song, and searching all over, it turns out indeed Aiden had come up with the lyrics and beat in his own time and mind. Eventually and with his 5 year old brother Noah, they thought about the different animals they liked to be part of the song, and came about to develop the lyrics and chorus to what’s now “It’s Cock-A-Doodle-Time!”', 
  'Their mom and dad, finding the beat catchy, approached a local musician, Isabelle Banos. Loving the idea of the 2 brothers creating a catchy song in their spare time, she took on the project and brought the song into life with her wonderful voice.',
  'Aiden’s father, Ali Avsar, who always was passionate about children’s books, both educational and musical content, brought on his good friend Harry, who fell in love with the song immediately. Harry shared Ali’s vision about the song and reaching out to children through positive reinforcement, worked with Ali and the kids to develop the animation for the song, in what they plan to have many sequels. The families whose kids went to the same daycare, got closer during the pandemic through song, their kids pure love for animals, and a vision of the future of children’s education in general.',
  'Through the song as a first step, the fathers hope to bring back good educational content, uncomplicated children’s leisure time from online games to more traditional family and social games which are educational and have sold teachings as they did in the past, with a twist of the now and a look at the future.”'
]


  const description = [
    "She is a Sassy chiken and mama to her chicks. She's fun and curious and likes to know everything that is happening on the farm. Some would even say she's was a little bit noisy! She's also a prankster and lives telling knock knock jokes!", 
    "She's the wise one of the bunch and the other farm animals look up to her. She keeps everyone in check and the other farm animals respect her and know when she means business. THere's no messing around with Coco! SHe asserts herself but also has a fun side. No one dances better than she can!",
    "He's a small dog with a big personality and you guessed it, he loves bones! Sometimes he thinks he's a chihuahua and other ties he thinks he's a dalmatian. Can you help us figure out what kind of dog he is?",
    "He's the best in the west and loves adventures, never says no to a quest. He loves country music and to throw barn yard parties for his friends. He loves hay but will never say no to a good carrot or apple.", 
    "What can we say about Whacky Dacky? He's a little bit wacky and a little bit quaky and is just one happy-go-lucky ducky. He's the kind of dick you just want to hang out with. He also gives the best hugs ever!",
    "Brooster the rooster makes sure everybody on the farm is up and ready. At the crack of dawn he cockleddoodledoos to mark the start of a new day of activities, learning and play!"

  ]

    return (
      <section>
      <div id="background">
         <img alt="farm" />
      </div>
      <div className="aboutSection">
        <h1> Made by Parents <br/> that behave like children! </h1>
        <p>{story[0]}</p>
        <p>{story[1]}</p>
        <p>{story[2]}</p>
        <p>{story[3]}</p>
      </div>

      <div className="chikita">
        <img alt="bigchicken" />
        <div className="aboutDescriptions">
        <h1>Chikita the chicken</h1>
        <p>{description[0]}</p>
        </div>
      </div>

      <div className="coco">
        <img alt="COW" />
        <div className="aboutDescriptions">
        <h1>Coco the cow</h1>
        <p>{description[1]}</p>
        </div>
      </div>

      <div className="tBone">
        <img alt="DOG" />
        <div className="aboutDescriptions">
        <h1>T-Bone the dog</h1>
        <p>{description[2]}</p>
        </div>
      </div>


      <div className="henwee">
        <img alt="Horse" />
        <div className="aboutDescriptions">
        <h1>Henwee the horse</h1>
        <p>{description[3]}</p>
        </div>
      </div>

      <div className="wacky">
        <img alt="DUCK" />
        <div className="aboutDescriptions">
        <h1>Whacky Dacky the duck</h1>
        <p>{description[4]}</p>
        </div>
      </div>

      <div className="rooster">
        <img alt="Rooster" />
        <div className="aboutDescriptions">
        <h1> Brooster the Rooster</h1>
        <p>{description[5]}</p>
        </div>
      </div>

   </section>
    );
}