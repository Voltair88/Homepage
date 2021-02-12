import React from "react";
import { motion } from 'framer-motion';

const Home = () => {
    return (
      <div>
        <div className="landing-grid">
          <div>
            <img 
              src="https://www.clipartmax.com/png/full/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png"
              alt="avatar"
              className="avatar-img"/>
            <div className="banner-text">
              <h1>Front-end web developer</h1>
              <p>HTML/CSS | JavaScript | React</p>
              <div className="social-links">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Voltair88"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <motion.i className="fa fa-facebook-square" aria-hidden="true"   whileHover={{ scale: 1.1 }} />
                </a>

                {/* Linked in */}
                <a
                  href="https://www.linkedin.com/in/mattias-gulec-1bbb6a72/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <motion.i className="fab fa-linkedin" aria-hidden="true"   whileHover={{ scale: 1.1 }} />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/Voltair88"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <motion.i className="fa fa-github-square" aria-hidden="true"  whileHover={{ scale: 1.1 }} />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/mattegulec"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <motion.i className="fab fa-twitter-square" aria-hidden="true"  whileHover={{ scale: 1.1 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;
