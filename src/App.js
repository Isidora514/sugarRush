import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// Component imports ------
import Nav from './Components/Nav';
import Header from './Components/Header';
import Characters from './Components/Characters';
import Videos from './Components/Videos';
import Follow from './Components/Follow';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      <Header />
      <Characters />
      <Videos />
      <Follow />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
