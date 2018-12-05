'Use strict';

import React, { Component } from 'react';

class Form extends Component {
  state = {
    from: '',
    to: ''
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { from, to } = this.state
    this.props.onSubmit([from, to])
    this.setState({
      from: '', to: ''
    })
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.from} onChange={this.handleInput} name="from"></input>
          <input type="text" value={this.state.to} onChange={this.handleInput} name="to"></input>
          <input type="submit" value="submit"/>
        </form>
    );
  }
}

export default Form;