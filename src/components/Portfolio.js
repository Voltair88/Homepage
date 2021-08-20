import React, { Component } from "react";
import { motion } from "framer-motion";
import { Port } from "../global";

const Portfolio = () => {
  {
    return (
      <Port>
        <div className="Cards">
          <div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
              <h2 className="card-title">Blog</h2>
              <p className="card-body">
                A blog made with node and lodash
              </p>
              <motion.div class="contentBox" whileHover={{ scale: 1.1 }}>
                <div id="first" class="buttonBox">
                  <div class="border"></div>
                  <div class="border"></div>
                  <a
                    href="https://github.com/Voltair88/node-test"
                    target="_blank"
                  >
                    <button className="card-button">Click</button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
              <h2 className="card-title">Star Wars API</h2>
              <p className="card-body">
                A simple API for Star Wars data
              </p>
              <a
                  href="https://github.com/Voltair88/star-wars-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square"/>
                </a>
              <motion.div class="contentBox" whileHover={{ scale: 1.1 }}>
                <div id="first" class="buttonBox">
                  <div class="border"></div>
                  <div class="border"></div>
                  <a
                    href="https://elegant-aryabhata-b3ff31.netlify.app/"
                    target="_blank"
                  >
                    <button className="card-button">Click</button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Port>
    );
  }
};
export default Portfolio;
