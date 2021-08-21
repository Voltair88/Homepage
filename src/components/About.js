import React, { Component, Fragment } from "react";
import { Me } from "../global";

export default class About extends Component {
  render() {
    return (
      <Me>
        <div className="about-container">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              I am a Front-End web developer with a passion for learning and
              problem solving. I have a strong background in software
              development and have worked with a variety of languages and
              frameworks. I am currently looking for a position in the software
              development industry.
            </p>
            <p>
              I am a self-motivated individual who is always looking for new
              challenges and opportunities. I am a team player who is always
              willing to learn new skills and technologies. I am a quick learner
              and enjoy working in a team environment.
            </p>
          </div>
        </div>
      </Me>
    );
  }
}
