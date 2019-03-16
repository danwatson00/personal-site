import React, { Component } from 'react'
import Button from '../Button/Button'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import { Link } from 'react-router-dom'
import './Portfolio.css'


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <PortfolioCard 
          cardTitle="AXEFAX" 
          cardIntro="A music startup company wanted a way to showcase their Guitar serial number API"
          cardLink="./axefax" 
          />
        <PortfolioCard
          cardTitle="MY CAMERA BAGS"
          cardIntro="A personal project to make an app for organizing camera gear"
          cardLink="./mycamerabags"
          />
        <PortfolioCard
          cardTitle="HACK FOR THE COMMUNITY"
          cardIntro="Our first place project for The Boys and Girls Club at the Hack for the Community hackathon"
          cardLink="./hackathon"
          />
        <PortfolioCard
          cardTitle="MOODIBLE"
          cardIntro="A capstone project to track your mood and health"
          cardLink="./moodible"
          />
      </div>
    );
  }
}

export default Portfolio