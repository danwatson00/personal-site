import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MainNav.css';


class MainNav extends Component {
  render() {
    return (
      <div className="mainNav">
        <ul>
          <Link to="/portfolio"><li>PORTFOLIO</li></Link>
          <Link to="/about"><li>ABOUT</li></Link>
          <Link to="/resume"><li>RESUME</li></Link>
          <Link to="/contact"><li>CONTACT</li></Link>
        </ul>
      </div>
    )
  }
}

export default MainNav;