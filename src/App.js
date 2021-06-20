import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//component
import Nav from './Components/Nav/Navbar'
import Header from './Components/Header'
import Characters from './Components/Character'

//Routes 
import About from './Components/About';
import Media from './Components/Media'
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Characters />
      </div>
    </Router>
  );
}

export default App;
