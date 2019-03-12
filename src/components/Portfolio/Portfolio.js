import React, { Component } from 'react'


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="axeFax">
          <h2>AxeFax</h2>
          <h3>Freelance Development Project</h3>
        </div>
        <div className="camera-bags">
          <h2>My Camera Bags</h2>
          <h3>Independent Capstone Project</h3>
        </div>
        <div>
          <h2>Hack for the Community</h2>
          <h3>First Place Group Project</h3>
        </div>
        <div className="moodible">
          <h2>Moodible</h2>
          <h3>Independent Capstone Project</h3>
        </div>
      </div>
    );
  }
}

export default Portfolio