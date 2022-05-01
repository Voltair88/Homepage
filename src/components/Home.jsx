import React from "react";
import { motion } from "framer-motion";
import { Landing } from "../global";
import { profile, profileimg } from "../img/index";

const Home = () => {
  return (
    <Landing>
      <div className="avatar-img">
        <img
          className="bottom skeleton"
          alt="profile"
          rel="preload"
          as="image"
          src={profileimg}
        />
        <img
          className="top skeleton"
          alt="profile"
          rel="preload"
          as="image"
          src={profile}
        />
      </div>
      <div className="banner-text">
        <h1>Front-End Web Developer</h1>
        <p>HTML/CSS | JavaScript | Typescript | React </p>
        <p>React Native | Node.js | ExpressJS </p>
        <div className="social-links">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/Voltair88"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Facebook"
          >
            <motion.i
              className="fa fa-facebook-square"
              aria-hidden="true"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />
          </a>
          {/* Linked in */}
          <a
            href="https://www.linkedin.com/in/mattias-gulec-1bbb6a72/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Linked in"
          >
            <motion.i
              className="fab fa-linkedin"
              aria-hidden="true"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />
          </a>
          {/* Github */}
          <a
            href="https://github.com/Voltair88"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Github"
          >
            <motion.i
              className="fa fa-github-square"
              aria-hidden="true"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/mattegulec"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Twitter"
          >
            <motion.i
              className="fab fa-twitter-square"
              aria-hidden="true"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />
          </a>
        </div>
      </div>
    </Landing>
  );
};

export default Home;
