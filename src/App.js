import React, { Component } from 'react';
import './App.css';
import './desktop.css';
import Drawer from './Components/Drawer'
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
        {/* <Drawer /> */}
        <Nav />
          <Switch>
            <Route exact path="/">
            <Header />
            <Characters />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
