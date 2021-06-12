import React from "react";


export default function Characters(props) {

  // will use to store description once received
  const description = [
    "She is a Sassy chiken and mama to her chicks. She's fun and curious and likes to know everything that is happening on the farm.", 
    "She's the wise one of the bunch and the other farm animals look up to her. She keeps everyone in check and the other farm animals respect her and know when she means business.",
    "He's a small dog with a big personality and you guessed it, he loves bones! Sometimes he thinks he's a chihuahua and other ties he thinks he's a dalmatian. Can you help us figure out what kind of dog he is?",
    "He's the best in the west and loves adventures, never says no to a quest. He loves country music and to throw barn yard parties for his friends. He loves hay but will never say no to a good carrot or apple.", 
    "What can we say about Whacky Dacky? He's a little bit wacky and a little bit quaky and is just one happy-go-lucky ducky. He's the kind of dick you just want to hang out with. He also gives the best hugs ever!",
    "Brooster the rooster makes sure everybody on the farm is up and ready. At the crack of dawn he cockleddoodledoos to mark the start of a new day of activities, learning and play!"
  ]


  return (
    <section className="characterSection">

<div className="characterDivs">
      <img alt="Chikita"></img >
      <td className="descBox" bgcolor="#eb4e72"> 
      <div className="desc"> 
        {description[0]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
      </td>
    </div>

    <div className="characterDivs">
      <td className="descBox" bgcolor="#65f3d7">  
      <div className="desc"> 
        {description[1]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
      </td>
      <div className="imageHolder">
          <h2>coco</h2>
          <img alt="coco"></img >
        </div>
    </div>

    <div className="characterDivs">
    <div className="imageHolder">
          <h2>tbone</h2>
          <img alt="tbone"></img >
        </div>
       <td className="descBox" bgcolor="#56d0fa">  
       <div className="desc"> 
        {description[2]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
        </td>
    </div>

    <div className="characterDivs">
      <td className="descBox" bgcolor="#e2ed3a">  
      <div className="desc"> 
        {description[3]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
        </td>
        <div className="imageHolder">
          <h2>henwee</h2>
          <img alt="henwee"></img >
        </div>
    </div>

    <div className="characterDivs">
    <div className="imageHolder">
          <h2>tbone</h2>
          <img alt="tbone"></img >
        </div>
      <td className="descBox" bgcolor="#7152be">  
      <div className="desc"> 
        {description[4]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
        </td>
    </div>

    <div className="characterDivs">
      <td className="descBox" bgcolor="#63c828">  
      <div className="desc"> 
        {description[5]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
        </td>
        <div className="imageHolder">
          <h2>Rooster</h2>
          <img alt="Rooster"></img >
        </div>
    </div>

    </section>
  )
}