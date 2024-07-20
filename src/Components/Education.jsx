import React from "react";
import { EduData } from "../Data/Data";
function Education() {
  return (
    <div className="Edu-container">
      <h2>Education</h2>
      <div className="Edu">
        {EduData.map((EduData, index) => (
          <div className="Edu-item" key={index}>
            <img
              src={EduData.schoolIcon}
              alt="Avatar"
              className="school-icon"
            />
            <h3 className="course">{EduData.course}</h3>
            <p className="duration">{EduData.Duration}</p>
            <p>{EduData.institute}</p>
            <p>{EduData.university}</p>
            <p>{EduData.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Education;
