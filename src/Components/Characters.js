import React from "react";


export default function Characters(props) {

  // will use to store description once received
  const descriptionArray = [ "decription1", "decription2", "decription3", "decription4", "decription5", "decription6", "decription7"]


  return (
    <section className="characterSection">

<div className="characterDivs">
      <img alt="Chikita"></img >
      <td className="descBox" bgcolor="#eb4e72"> 
      <div className="desc"> 
        {descriptionArray[0]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
      </td>
    </div>

    <div className="characterDivs">
      <td className="descBox" bgcolor="#65f3d7">  
      <div className="desc"> 
        {descriptionArray[1]}
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
        {descriptionArray[2]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
        </td>
    </div>

    <div className="characterDivs">
      <td className="descBox" bgcolor="#e2ed3a">  
      <div className="desc"> 
        {descriptionArray[3]}
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
        {descriptionArray[4]}
      </div>
      <button type="button" class="btn btn-primary btn-lg">Learn more about me!</button>
        </td>
    </div>

    <div className="characterDivs">
      <td className="descBox" bgcolor="#63c828">  
      <div className="desc"> 
        {descriptionArray[5]}
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