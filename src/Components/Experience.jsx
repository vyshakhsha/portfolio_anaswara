import React from "react";
import { ExpData } from "../Data/Data";

function Experience() {
  return (
    <div className="Exp-container">
      <h2>Work Experience</h2>
      <div className="Exp">
        {ExpData.map((ExpData, index) => (
          <div className="Exp-item" key={index}>
            <div className="Exp-header">
              <div className="Exp-header-p">
                <p className="position">{ExpData.position}</p>
                <p className="company">{ExpData.company}</p>
                <p className="duration">{ExpData.Duration}</p>
              </div>
              <div className="company-logo">
                <a
                  href={ExpData.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ExpData.companyLogo} alt="companylogo" />
                </a>
              </div>
            </div>
            <p className="Exp-desc">{ExpData.ExpDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
