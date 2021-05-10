import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-scroll';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="section-header-text">
          <h3>About</h3>
        </div>
        <div className="about-description">
          <p>
            Hello! My name is Ian Seto, currently a 4th year student at Wentworth Institute of Technology studying Computer Science for my major. I am extremely passionate for building well-designed and robust applications using various languages such as JavaScript, React, Java, and Python.
          </p>
        </div>
        <div className="page-transition">
          <Link className="project-section-link"  to="projects-section" spy={true} smooth={true} duration={750}>
            <Button className="projects-arrow-button"> 
              <ArrowDropDownCircleIcon className="projects-arrow-icon" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
