import React, { Component } from 'react';
import DaySquare from './containers/DaySquare'
import './App.css';

class App extends Component {

  render() {
    const projects = new Array(100).fill({
      day: 1,
      name: "AI Chatbot",
      img: "https://media.giphy.com/media/1ircViuXgDKJXMlNVS/giphy.gif",
      topic: "Bits and Pieces",
      linkToCode: "https://github.com/Gingertonic/one-hundred-days-of-code-tracker",
      linkToDemo: "https://media.giphy.com/media/1ircViuXgDKJXMlNVS/giphy.gif"
    })

    const mapProjects =  projects.map(p => <DaySquare project={p}/>)
    return (
      <div className="App">
        {mapProjects}
      </div>
    );
  }
}

export default App;
