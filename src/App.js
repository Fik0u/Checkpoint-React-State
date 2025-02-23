import './App.css';

import React, { Component } from 'react'
import Person from './components/Person';

export default class App extends Component {
constructor(props) {
    super(props)
    this.state = {
      show: false
}
}
Toggle = () => {
    this.setState({ show: !this.state.show })
}

  render() {
    return (
      <div className="App">
        <h1>Checkpoint React State</h1>
        <button onClick={this.Toggle}>{this.state.show ? 'Hide' : 'Show'}</button>
        {this.state.show && <Person />}
      </div>
    )
  }
}
