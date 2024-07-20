import { React, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function NavBar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }

    hamburger.addEventListener("click", mobileMenu);
    const navLinks = document.querySelectorAll(".linkItem");
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    // Cleanup event listeners on component unmount
    return () => {
      hamburger.removeEventListener("click", mobileMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  return (
    <div className="NavBar">
      <div className="NavBar-logo">
        <img src={require("../Assets/logo.png")} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="linkItem" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="linkItem" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/education">
            Education
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/certification">
            Certification
          </Link>
        </li>
        <li>
          <Link className="linkItem " to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  );
}

export default NavBar;
