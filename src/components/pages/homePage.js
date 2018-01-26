import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div className ="wrap">
        <div className="backImg">
        </div>
        <div className="frontText">
      <h1 className="name"> Michael M. Simon </h1>
      <h3 className="underName">Front-End developer and UX designer</h3>
      <Link to="/Portfolio">
      <button className="viewPortBtn">VIEW PORTFOLIO</button>
      

      </Link>
      </div>

      </div>
    );
  }
}
export default Homepage;
