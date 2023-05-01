import React from "react";
import { Land } from "../global";
import profile from "../img/profile.webp";
export default function Landing() {
  return (
    <Land>
      <img
        className="skeleton"
        alt="profile"
        rel="preload"
        as="image"
        src={profile}
        loading="lazy"
      />
      <div className="contact-text">
        <h1>Front-End Web Developer</h1>
        <p>HTML/CSS | JavaScript | Typescript | React </p>
        <p>React Native | Vue | Flutter </p>
        <div className="social-links">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/Voltair88"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
          {/* Linked in */}
          <a
            href="https://www.linkedin.com/in/mattias-gulec-1bbb6a72/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Linked in"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
          {/* Github */}
          <a
            href="https://github.com/Voltair88"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Github"
          >
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/mattegulec"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Land>
  );
}
