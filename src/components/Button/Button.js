import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.btnClass}
        onClick={this.props.handleClick}>
        {this.props.btnText}
        </button>
    );
  }
}

export default Button;