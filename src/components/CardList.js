'Use strict';
import React, { Component } from 'react';
import gradients from '../data/gradients.json';
import Card from './Card';
import './Card.css'

class CardList extends Component {
  state = {
    gradients: gradients
  }
  render() {
    const { gradients } = this.state;
    return (
      <div className="card-list">
        {gradients.map((item, index) => {
          return (
            <Card values={item} key={index}/>
          )
        })}
      </div>
    );
  }
}

export default CardList;