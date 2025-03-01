import React, { Component } from 'react'
import pic from '../assets/pic.png'

// Class based Component Person
export default class Person extends Component {
    constructor(props) {
        super(props)
        this.person = {
            fullName: 'Alan Turing',
            bio: 'The Father of Modern Computing, Turing is recognized as a pioneer of computer science, cryptography, and artificial intelligence. He published a groundbreaking paper introducing the concept of the Turing machine. He also played a key role in breaking the German Enigma cipher',
            profession:'Mathematician and logician',
            imgSrc: pic,
        }
        this.state = { // A state to keep track of the time
            timer: 0
        }
    }
// Component lifecycle method to start the timer
componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({timer: this.state.timer + 1})}, 1000) // Increment the timer every second
}
componentWillUnmount(){
        clearInterval(this.timer) // Clear the timer when the component is unmounted
}

  render() {
    return (
      <div style={{margin: '50px'}}>
        <h5>{this.state.timer}</h5>
        <h2>{this.person.fullName}</h2>
        <h4>{this.person.bio}</h4>
        <h4>{this.person.profession}</h4>
        <img src={this.person.imgSrc} alt="Alan Turing" style={{width: '200px'}}/>
      </div>
    )
  }
}
