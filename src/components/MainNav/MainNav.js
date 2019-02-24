import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MainNav.css';


class MainNav extends Component {
  render() {
    return (
      <div className="mainNav">
        <ul>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/resume">RESUME</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    )
  }
}

export default MainNav;