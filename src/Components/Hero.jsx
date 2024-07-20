import React from "react";
import "./Style.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="avatar">
        <img src={require("../Assets/avatar.jpg")} alt="Avatar" />
      </div>
      <div className="intro-container">
        <h2 className="intro">
          I'M <span className="intro-name">ANASWARA</span>
        </h2>
        <p className="intro-p">GIS Engineer &</p>
        <p className="intro-p">
          CCNA certified Aspiring IT Security professional
        </p>
      </div>
    </div>
  );
}
export default Hero;
