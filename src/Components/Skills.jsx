import React from "react";
import { skillData } from "../Data/Data";

function Skills() {
  return (
    <div className="skill-container">
      <h2>My Top Skills</h2>
      <div className="skills">
        {skillData.map((skill, index) => (
          <div className="skill-items" key={index}>
            <img src={skill.imgurl} alt="skill icon" />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
