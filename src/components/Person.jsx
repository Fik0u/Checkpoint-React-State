import React, { Component } from 'react'
import pic from '../assets/pic.jpg'

export default class Person extends Component {
    constructor(props) {
        super(props)
        this.person = {
            fullName: 'Elon Musk',
            bio: 'Elon Musk is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.',
            profession:'CEO of SpaceX',
            imgSrc: pic,
        }
        this.state = {
            timer: 0
        }
}

componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({timer: this.state.timer + 1})}, 1000)
}
componentWillUnmount(){
        clearInterval(this.timer)
}

  render() {
    return (
      <div>
        <h5>{this.state.timer}</h5>
        <h2>{this.person.fullName}</h2>
        <h3>{this.person.bio}</h3>
        <h3>{this.person.profession}</h3>
        <img src={this.person.imgSrc} alt="Elon Musk"/>

      </div>
    )
  }
}
