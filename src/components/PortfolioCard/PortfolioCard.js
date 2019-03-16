import React, { Component } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './PortfolioCard.css'

class PortfolioCard extends Component {
  render() {
    return (
      <div className="portfolioCard">
        <div className="cardHeader">
          <h2>{this.props.cardTitle}</h2>
          <p>{this.props.cardIntro}</p>
          <Link to={this.props.cardLink}>
            <Button btnText="SEE WHAT I DID" btnClass="btn btnLg portBtn" />
          </Link>
        </div>
      </div>

    );
  }
}

export default PortfolioCard