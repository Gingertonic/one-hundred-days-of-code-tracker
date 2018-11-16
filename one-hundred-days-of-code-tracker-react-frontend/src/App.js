import React, { Component } from 'react';
import DaySquare from './containers/DaySquare'
import './App.css';

class App extends Component {

  render() {
    const projects = new Array(100).fill({name: "demo", img: "https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault-768x432.jpg"})
    const mapProjects =  projects.map(p => <DaySquare project={p}/>)
    return (
      <div className="App">
        {mapProjects}
      </div>
    );
  }
}

export default App;
