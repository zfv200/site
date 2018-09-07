import React from 'react'

class Project extends React.Component{

  state={
    toggled: false
  }

  handleClick = () => {
    let currentToggle = this.state.toggled
    this.setState({
      toggled: !currentToggle
    })
  }

  render(){
    return(
      <div>
        <h1 className="projectTitle" onClick={this.handleClick}>{this.props.title}</h1>
        <p className="stack">{this.props.stack}</p>
        {this.state.toggled ?
          <div>
          <p className="centered">{this.props.description}</p>
            <div className="list">
              <ul>
              <li>{this.props.line1}</li>
              <li>{this.props.line2}</li>
              <li>{this.props.line3}</li>
              </ul>
            </div>
          </div>
        : null}
      </div>
    )
  }
}

export default Project
