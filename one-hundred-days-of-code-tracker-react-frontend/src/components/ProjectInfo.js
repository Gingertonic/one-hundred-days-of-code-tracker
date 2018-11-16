import React from 'react';

const ProjectInfo = props => {
  return (
    <div className="project-info">
      <h1>Day {props.project.day}</h1>
      <p>{props.project.name}</p>
      <p>{props.project.topic}</p>
      <ul>
      <li><a href={props.project.linkToCode}>See the Code</a></li>
      <li><a href={props.project.linkToDemo}>See the Demo</a></li>
      </ul>
    </div>
  )
}

export default ProjectInfo
