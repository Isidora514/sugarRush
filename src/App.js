import React, { Component } from 'react';
import './App.css';

// Component imports ------
import Header from './Components/Header';
import Characters from './Components/Characters';
import Videos from './Components/Videos';
import Follow from './Components/Follow';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <Videos />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
