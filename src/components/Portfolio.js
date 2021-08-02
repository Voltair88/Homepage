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
                Amet non velit magna id pariatur incididunt mollit dolore.
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
              <h2 className="card-title">Blog</h2>
              <p className="card-body">
                Amet non velit magna id pariatur incididunt mollit dolore.
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
              <h2 className="card-title">Blog</h2>
              <p className="card-body">
                Amet non velit magna id pariatur incididunt mollit dolore.
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
              <h2 className="card-title">Blog</h2>
              <p className="card-body">
                Amet non velit magna id pariatur incididunt mollit dolore.
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
        </div>
      </Port>
    );
  }
};
export default Portfolio;
