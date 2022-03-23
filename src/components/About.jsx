import React, { Component } from "react";
import { Me } from "../global";

export default class About extends Component {
  render() {
    return (
      <Me>
        <div className="about-container">
          <div className="about-text">
            <h4>Hi, my name is</h4> <h1>Mattias Gulec</h1>
            <hr />
            <p>
              I am freelance front-end developer from Stockholm, Sweden. I have
              experience in working in different areas of development,
              always trying to figure out the problems that comes with it and
              work towards a solution which pleases my client and myself. Though
              I have a strong focus on front-end development as well as React
              development, I can confidently say that nothing stops me from
              learning new things and trying to make the most out of my time.
            </p>
            <hr />
            <br />
            <p>
              I have a passion for learning and problem solving. I have worked
              with a variety of libraries and frameworks. I am currently looking
              for a position in the Front-End development industry.
            </p>
            <hr />
            <br />
            <p>
              I am a self-motivated individual who is always looking for new
              challenges and opportunities. I am a team player who is always
              willing to learn new skills and technologies.
            </p>
          </div>
        </div>
      </Me>
    );
  }
}
