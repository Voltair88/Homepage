import React, { Component } from "react";
import { Port } from "../global";
import { motion } from "framer-motion";

const Portfolio = () => {
  {
    return (
      <Port>
        <div className="Cards">
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
              <h2 className="card-title">Blog</h2>
              <p className="card-body">
                A blog made with node and ejs.
                <br />
                <br />
              </p>
              <div class="contentBox">
                <div id="first" class="buttonBox">
                  <div class="border"></div>
                  <div class="border"></div>
                  <a
                    href="https://github.com/Voltair88/node-test"
                    target="_blank"
                  >
                    <button className="card-button">Github</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
              <h2 className="card-title">
                Star Wars API{" "}
                <a
                  href="https://github.com/Voltair88/star-wars-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" />
                </a>
              </h2>
              <p className="card-body">
                A simple API for Star Wars data.
                <br />
                <br />
              </p>
              <div class="contentBox">
                <div id="first" class="buttonBox">
                  <div class="border"></div>
                  <div class="border"></div>
                  <a
                    href="https://elegant-aryabhata-b3ff31.netlify.app/"
                    target="_blank"
                  >
                    <button className="card-button">Live</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
              <h2 className="card-title">
                Quire{" "}
                <a
                  href="https://github.com/Voltair88/fe20tp1_-Vellum-"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" />
                </a>
              </h2>
              <p className="card-body">
                Quire is an online note-taking application.
              </p>
              <div class="contentBox">
                <div id="first" class="buttonBox">
                  <div class="border"></div>
                  <div class="border"></div>
                  <a href="http://vellum.surge.sh/" target="_blank">
                    <button className="card-button">Live</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
              <h2 className="card-title">Football Statistics</h2>
              <p className="card-body">
                Powered by Football-Data and API-Sports
              </p>
              <div class="contentBox">
                <div id="first" class="buttonBox">
                  <div class="border"></div>
                  <div class="border"></div>
                  <a
                    href="https://github.com/Voltair88/fe20tp2_bev_-5-"
                    target="_blank"
                  >
                    <button className="card-button">Github</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Port>
    );
  }
};
export default Portfolio;
