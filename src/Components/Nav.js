import React, { Component } from 'react';

export default function Nav (props) {


    return (
      <nav id="nav" className="navbar navbar-expand-lg py-4 px-5">

            <a className='navbar-brand'>
              {/* Just insert an image tag of the logo here and href to the anchor tag */}
            logo placeholder
            </a>

            <div className='collapse navbar-collapse w-100'>
              <ul className='navbar-nav w-100 justify-content-around'>
                  <li className="nav-item selected">
                    <h3><a className="text-white text-decoration-none" href="">Home</a></h3>
                  </li>

                  <li className="nav-item">
                    <h3><a className="text-white text-decoration-none" href="">About</a></h3>
                  </li>

                  <li className="nav-item">
                    <h3><a className="text-white text-decoration-none" href="">Media</a></h3>
                  </li>
                  
                  <li className="nav-item">
                    <h3><a className="text-white text-decoration-none" href="">Contact</a></h3>
                  </li>
              </ul>
            </div>
      </nav>
    );
}