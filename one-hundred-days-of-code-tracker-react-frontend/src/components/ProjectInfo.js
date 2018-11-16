import React from 'react';

const ProjectInfo = props => {
  return (
    <div className="project-info">
      <h1>{props.project.name}</h1>
      <p>Day {props.project.day}</p>
      <p>{props.project.topic}</p>
      <img className="focus-image" src={props.project.img} alt={props.project.name}/>
      <ul>
        <li><a href={props.project.linkToCode} target="_blank">See the Code</a></li>
        <li><a href={props.project.linkToDemo} target="_blank">See it in Action</a></li>
      </ul>
    </div>
  )
}

export default ProjectInfo
