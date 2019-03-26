import React, { Component } from 'react'
import './ProjectTemplate.css'
import TechIcons from '../TechIcons/TechIcons'

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
          <p>{this.props.tech}</p>
          <TechIcons icons={this.props.techIcons}/>
        </div>
        <div className="process projDiv">
          <h2>THE PROCESS</h2>
        </div>
        <div className="product projDiv">
          <h2>THE PRODUCT</h2>
          <div>
            <a href="">
              <img src={require(`../../images/github.png`)} alt="github icon" />
              <p>Github</p>
            </a>
          </div>
          <div>
            <a>
              <img src={require(`../../images/internet.png`)} alt="world wide web icon" />
              <p>Live Site</p>
            </a>
          </div>
          <div>
            <a>
              <img src={require(`../../images/internet.png`)} alt="world wide web icon" />
              <p>Design Case Study</p>
            </a>
          </div>

        </div>
        <div className="learned projDiv">
          <h2>WHAT I LEARNED</h2>
          <p>{this.props.learned}</p>
        </div>
        
      </div>
    );
  }
}

export default ProjectTemplate