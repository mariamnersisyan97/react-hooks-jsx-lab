import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      About
      <h2>About Me</h2>
      <p>Hello! This is an example of my capstone web page.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
