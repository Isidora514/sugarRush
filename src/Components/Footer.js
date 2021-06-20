import React from "react";
import bigChicken from "../images/home/Brooster-Rooster-2.png";
import footerAnimals from '../images/home/Footer-animals.png'; 


export default function Footer(props) {

  const content = [
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  ]

  return (
    <section className="footerSection">

    <div className="footer mt-3">
      <div className="footBanner">
      <img src={footerAnimals} />
      </div> 
      <div className="footCenter">
      <h1 className="magenta mb-4 farmer">MADE FOR KIDS BY KIDS</h1>
      <p className="disclaimer">For Entertainment, Educational and Music purpose, only for kids</p>
      </div>
    </div>

    <div>
      <small>
        Privacy Policy &#124; Terms of use &#124; Surgarrushjams.org
      </small>
    </div>

    </section>
  )
}