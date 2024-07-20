import React from "react";

function Projects() {
  return (
    <div className="project-container">
      <h2>Academic Projects</h2>
      <div className="project">
        <div className="project-item">
          <p className="proj-name">
            Chipless RFID tag design using DGS and spiral resonators
          </p>
          <p className="proj-desc">
            Designed a chipless RFID tag using Defected Ground Structure (DGS)
            and spiral resonators, creating a 4-bit unit chipless radio
            frequency identification tag architecture. This project involved
            combining DGS and spiral resonators and simulating the design with
            ANSOFT HFSS Software Version 15.0.
          </p>
        </div>
        <div className="project-item">
          <p className="proj-name">TEXT TO BRAILLE CONVERTOR</p>
          <p className="proj-desc">
            Developed a text-to-Braille converter to facilitate reading
            extensive information stored on SD cards for visually impaired
            individuals. This project utilized the PIC 18f4550 microcontroller
            and servo motors to achieve its functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
