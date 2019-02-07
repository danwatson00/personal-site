import React, { Component } from 'react';

import './MainNav.css';


class MainNav extends Component {
  render() {
    return ( 
      <div className="mainNav">
        <ul>
          <li> <a href="/">HOME</a></li>
          <li><a href="/about.html">ABOUT</a></li>
          <li><a href="/contact.html">CONTACT</a></li>
        </ul>
      </div>
    )
  }
}

export default MainNav;