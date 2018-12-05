'Use strict';
import './Card.css'
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { values } = this.props;
    const cardGradient = {
      backgroundImage: `linear-gradient(135deg, ${values[0]} 10%, ${values[1]} 100%)`
    }
    return (
      <div className="card">
        <div className="card-gradient" style={cardGradient}>
        </div>
        <div className="card-description">
          <div style={{color: values[0]}}>{values[0]}</div>
          <div style={{color: values[1]}}>{values[1]}</div>
        </div>
      </div>
    );
  }
}

export default Card;