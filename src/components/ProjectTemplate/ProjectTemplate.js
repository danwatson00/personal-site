import React, { Component } from 'react'
import './ProjectTemplate.css'
/* import Guitarist from '/src/images/guitarist.jpg' */

class ProjectTemplate extends Component {
  render() {
    return (
      <div className="projectTemplate">
        <div className={`${this.props.bkg} ask projDiv`}>
          <h2>THE ASK</h2>
          <div className="desc">
            <p>{this.props.ask}</p>
          </div>
        </div>
        <div className="challenge projDiv">
          <h2>THE CHALLENGE</h2>
          <div className="challengeText">
            <div className="desc">
              <p>{this.props.challenge}</p>
            </div>
            <img src={require(`../../images/${this.props.imgName}.jpg`)} alt={this.props.imgAlt} />
          </div>
        </div>
        <div className="goals projDiv">
          <h2>THE GOALS</h2>
          <div className="goalsCards">
            <div className="goalOne goal">
              <h3>{this.props.g1h}</h3>
              <p>{this.props.g1p}</p>
            </div>
            <div className="goalTwo goal">
              <h3>{this.props.g2h}</h3>
              <p>{this.props.g2p}</p>
            </div>
            <div className="goalThree goal">
              <h3>{this.props.g3h}</h3>
              <p>{this.props.g3p}</p>
            </div>
          </div>
        </div>
        <div className="tech projDiv">
          <h2>THE TECH</h2>
          <p> I very excited about this project because I got to do all of the work 
          from design to development. Starting with wireframes, I created functioning 
          mockups with Adobe XD. The company’s existing sites were made with Vue.js 
          so I decided to try making the app in Vue.js. I also used Javscript, HTML, 
          and CSS.</p>
        </div>
        <div className="process projDiv">
          <h2>THE PROCESS</h2>
        </div>
        <div className="product projDiv">
          <h2>THE PRODUCT</h2>
        </div>
        <div className="learned projDiv">
          <h2>WHAT I LEARNED</h2>
        </div>
        
      </div>
    );
  }
}

export default ProjectTemplate