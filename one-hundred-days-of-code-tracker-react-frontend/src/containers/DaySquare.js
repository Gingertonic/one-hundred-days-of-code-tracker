import React, {Component} from 'react';

class DaySquare extends Component {
  render(){
    return(
      <div className ="day-square">
        <img className ="day-square-img" src={this.props.project.img} alt="project image" />
      </div>
    )
  }
}

export default DaySquare
