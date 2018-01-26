import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Aboutme from './components/pages/aboutme';
import Hireme from './components/pages/hireme';
import Articles from './components/pages/articles';


import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header/>

        <div className="backgroundImageFixer">

        <Route exact path='/' component = {Homepage}/>
        <Route exact path='/Portfolio' component = {Portfolio}/>
        <Route exact path='/Contact' component = {Contact}/>
        <Route exact path='/Aboutme' component = {Aboutme}/>
        <Route exact path='/Hireme' component = {Hireme}/>
        <Route exact path='/Articles' components = {Articles}/>

        </div>

      </div>
      </Router>
    );
  }
}

export default App;
