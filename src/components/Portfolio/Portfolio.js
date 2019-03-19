import React, { Component } from 'react'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import './Portfolio.css'


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <PortfolioCard 
          cardTitle="AXEFAX" 
          cardIntro="A music startup company wanted a way to showcase their Guitar serial number API"
          cardLink="./axefax" 
          bkd="axeCard"
          />
        <PortfolioCard
          cardTitle="MY CAMERA BAGS"
          cardIntro="A personal project to make an app for organizing camera gear"
          cardLink="./mycamerabags"
          bkd="camera"
          />
        <PortfolioCard
          cardTitle="HACK FOR THE COMMUNITY"
          cardIntro="Our first place project for The Boys and Girls Club at the Hack for the Community hackathon"
          cardLink="./hackathon"
          bkd="hackathon"
          />
      </div>
    );
  }
}

export default Portfolio