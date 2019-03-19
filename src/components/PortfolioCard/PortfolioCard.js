import React, { Component } from 'react'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import './PortfolioCard.css'



class PortfolioCard extends Component {
  render() {
    return (
      <div className={`${this.props.bkd} portfolioCard`}>
        <h2>{this.props.cardTitle}</h2>
        <div className="cardDetail">
          <div className="cardIntro">
            <p>{this.props.cardIntro}</p>
          </div>
          <NavLink className="linkBtn" to={this.props.cardLink}>
            <Button btnText="SEE WHAT I DID" btnClass="btn btnLg portBtn" />
          </NavLink>
        </div>
      </div>

    );
  }
}

export default PortfolioCard