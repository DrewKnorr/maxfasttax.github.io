import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Services from './pages/services';

import NavBar from './nav-bar/navBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='nav-bar'>
          <NavBar/>
          
        </div>
        <div className='content-wrapper'>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/services" component={Services}/>
        </div>
        <div className='footer-wrapper'>
        </div>
      </div>
    );
  }
}
