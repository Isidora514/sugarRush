import React, { Component } from 'react';

export default function Header (props) {


    return (
      <header id="home">
      <nav id="nav">
            <li>
            <h2><a href="">Home</a></h2>
            <h2><a href="">About</a></h2>
            <h2><a href="">Media</a></h2>
            <h2><a href="">Contact</a></h2>
            </li>
      </nav>
      <div id="background">
         <img alt="farm" />
      </div>
      <div id="description">
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses</p>
      </div>
      <div id="videodiv">
      <iframe id="videoWindow" width="560" height="315" src="https://www.youtube.com/embed/los4K5cif30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
   </header>
    );
}
