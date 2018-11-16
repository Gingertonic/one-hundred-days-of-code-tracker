import React, {Component} from 'react';

class DaySquare extends Component {
  handleOnClick = () => {
    alert(`This is project ${this.props.project.name}`)
  }

  render(){
    return(
      <div className ="day-square">
        <img className ="day-square-img" src={this.props.project.img} alt="project image" onClick={this.handleOnClick}/>
      </div>
    )
  }
}

export default DaySquare
