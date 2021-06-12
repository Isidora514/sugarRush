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

import About from './Components/About';

function App() {
  return (
    <Router>
        <div className="App">
        <Nav />
      <Switch>
        <Route exact path="/">
          <Header />
          <Characters />
          <Videos />
          <Follow />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
          <Follow />
        </Route>
      </Switch>
        </div>
      </Router>
  );
}

export default App;
