import './App.css';
import React, { Component } from 'react'
// The import of a our class Person from the Person.js file
import Person from './components/Person';

// Class based Component App
export default class App extends Component {
    constructor(props) {
          super(props)
          this.state = {
              show: false // A boolean state to show or hide the Person component
          }
      }
// A function to toggle the show state
  Toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="App">
        <h1 style={{color: 'white'}}>React State</h1>
        <button onClick={this.Toggle}>{this.state.show ? 'Hide' : 'Show'}</button> {/* Call of the function to show or hide */}  
        {this.state.show && <Person />}
      </div>
    )
  }
}
