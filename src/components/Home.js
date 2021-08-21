import React from "react";
import { motion } from "framer-motion";
import { Landing } from "../global";
import profile from "../img/profile.png";
import profileimg from "../img/profileimg.png";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const Home = () => {
  return (
    <Landing>
      <div className="avatar-img">
        <p className="avatar-msg">Click/hover  <ArrowDownwardIcon fontSize="large" /></p>
        <img className="bottom" src={profileimg} />
        <img className="top" src={profile} />
                    {/* <img 
              src= {profile}
              onMouseOver={e => e.currentTarget.src = profileimg}
              onMouseOut={e => e.currentTarget.src = profile}
              alt="avatar"
              className="avatar-img"/> */}
      </div>

      <div className="banner-text">
        <h1>Front-End Web Developer</h1>
        <p>HTML/CSS | JavaScript | React | Node.js</p>
        <div className="social-links">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/Voltair88"
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.i
              className="fa fa-facebook-square"
              aria-hidden="true"
              whileHover={{ scale: 1.1 }}
            />
          </a>

          {/* Linked in */}
          <a
            href="https://www.linkedin.com/in/mattias-gulec-1bbb6a72/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.i
              className="fab fa-linkedin"
              aria-hidden="true"
              whileHover={{ scale: 1.1 }}
            />
          </a>

          {/* Github */}
          <a
            href="https://github.com/Voltair88"
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.i
              className="fa fa-github-square"
              aria-hidden="true"
              whileHover={{ scale: 1.1 }}
            />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/mattegulec"
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.i
              className="fab fa-twitter-square"
              aria-hidden="true"
              whileHover={{ scale: 1.1 }}
            />
          </a>
        </div>
      </div>
    </Landing>
  );
};

export default Home;
