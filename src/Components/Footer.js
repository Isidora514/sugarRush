import React from "react";


export default function Characters(props) {

  const content = [
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  ]

  return (
    <section className="footerSection">

<div className="firstFooter">
      <td bgcolor="#56d0fa"> 
      <h1 color="#ffff">Why sugar rush?</h1>
      <p>{content[0]}</p>
      </td>
    </div>
    <div className="midImage">
    <img alt="bigchicken" />
    </div>

    <div className="secondFooter">
      <td bgcolor="#eb4e72"> 
      <h1 color="#ffff">Article: History with my son</h1>
      <p>{content[1]}</p>
      </td>
    </div>

    <div className="thirdFooter">
      <td> 
      <h1 color="#eb4e72">Bye Bye see you soon!</h1>
      <p>{content[1]}</p>
      </td>
    </div>

    </section>
  )
}