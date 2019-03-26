import React, { Component } from 'react'
import './TechIcons.css'

class TechIcons extends Component {
  render() {
    var icons = this.props.icons;
    return (
      
      <div className="techIcons">
        {icons.map(function(iconName, index){
          return <img className="techIcon"
          key={index} 
          src={require(`../../images/${iconName}.png`)} 
          alt={iconName + ' icon'} />
        })}
      </div>
    );
  }
}

export default TechIcons