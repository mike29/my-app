import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">

          <Link to="/">
          <img className= "logoImg" alt="its just a picture" src={require('../../images/logo.png') } />
          </Link>
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link to="/"> Home</Link>
            </li>

            <li>
              <Link to="/Portfolio"> Portfolio </Link>
            </li>

            <li>
              <Link to="/Aboutme"> About Me </Link>
            </li>

            <li>
              <Link to="/Contact"> Contact </Link>
            </li>

            <li>
              <Link to="/Articles"> Articles </Link>
            </li>

            <li className="last">
              <Link to="/Hireme"> Hire Me </Link>
            </li>

          </ul>
        </nav>

      </header>
    );
  }
}
export default Header;
