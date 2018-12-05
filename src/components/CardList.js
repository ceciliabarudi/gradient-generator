'Use strict';
import React, { Component } from 'react';
import gradients from '../data/gradients.json';
import Form from './Form';
import Card from './Card';
import './Card.css'

class CardList extends Component {
  state = {
    gradients
  }

  addCard = (fromToArray) => {
    const gradients = this.state.gradients
    gradients.push(fromToArray)
    this.setState({
      gradients
    })
  }

  render() {
    const { gradients } = this.state;
    return (
      <div>
        <Form onSubmit={this.addCard}/>
        <div className="card-list">
        {gradients.map((item, index) => {
          return (
            <Card values={item} key={index}/>
          )
        })}
        </div>
      </div>
    );
  }
}

export default CardList;