import React, { Component } from 'react';
import DaySquare from './containers/DaySquare'
import {projects} from './projects'
import './App.css';

class App extends Component {

  render() {
    const mapProjects =  projects.map(p => <DaySquare project={p}/>)
    return (
      <div className="App">
        {mapProjects}
      </div>
    );
  }
}

export default App;
