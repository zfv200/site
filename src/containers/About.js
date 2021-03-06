import React from 'react'
import FadeIn from 'react-fade-in';
import Footer from '../components/Footer'

import pic from '../profpic.jpeg'

class About extends React.Component{
  state={
    loaded: false
  }

  componentDidMount(){
    // window.scrollTo(window.innerHeight, window.innerWidth)
    this.setState({
      loaded: true
    })
  }

  summary = () => {
    return (
      <p>Dedicated Full Stack Web Developer with a commitment to collaborative learning, education, development and production.
Integrating experience in Javascript, React, and Ruby/Rails with a background in philosophy and music, I am happiest when working
with a team of driven and creative developers committed to reaching new heights with software and web technology.</p>
    )
  }

  render(){
    return(
      <FadeIn>
        <div style={{display: 'flex', flexDirection: "column", marginBottom: '80px'}}>
          <div>
            <img src={pic} id="pic"/>
          </div>
          <div>
            <Footer />
          </div>
          <div className="summary">
            {this.summary()}
          </div>
        </div>
      </FadeIn>
    )
  }
}

export default About
