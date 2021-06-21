import React from "react";
import Form from "./Myform";
import banner from "../images/contact/banner-contact.png";

import youtubeLogo from '../images/youtube-icon.png';
import tiktokLogo from '../images/TikTok.png';
import barn from "../images/contact/barn-contact-1.png"
import house from "../images/contact/House-contact.png"

import tBone from "../images/contact/T-bone-contact.png";
import hay from "../images/contact/botte-foin-contact.png";
import wacky from "../images/contact/Wacky-duck-contact.png";

import Button from './Homebutton'
import Footer from './Footer'

export default function Contact(props) {
  return (
    <section className="contactSection">
      <div>
        <img id="banner" src={banner} />
      </div>
      <div className="formDiv blue-bg">
        <h1>FEEL FREE TO CONTACT US WITH YOUR QUESTIONS & INQUIRIES!</h1>
        <Form />
      </div>
      <div className="contactImgs">
        <div className="imgDiv1">
          <img src={tBone} />
        </div>
        <div className="imgDiv2">
          <img src={hay} />
        </div>
      </div>

      <div className="grid">
        <div className="row1Contact">
          <img className="houseContact" src={barn} alt="house"></img>
          <div className="followUsContact">
            <h1 className="magenta farmer">FOLLOW US ON</h1>
            <h1 className="magenta farmer">YOUTUBE AND TICKTOK</h1>
            <div className="contactLinkWrap">
              <a
                href="https://www.youtube.com/channel/UCkalsK7iUBi29AfUjSI_P4w"
                target="_blank"
              >
                <img className="contactFollowLinks" src={youtubeLogo} />
              </a>
              <a
                href="https://www.tiktok.com/@sugarrushjams?lang=en"
                target="_blank"
              >
                <img className="contactFollowLinks" src={tiktokLogo} />
              </a>
            </div>
          </div>
        </div>

        <div className="row2Contact">
          <img className="houseContact" src={house} alt="house"></img>
          <div className="contactButtonDiv">
            <Button />
          </div>
        </div>
      </div>
      <div className="bottomGrid">
         <img id="wackyContact" src={wacky} />
      </div>

      <Footer />
    </section>
  );
}
