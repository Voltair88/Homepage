import React, { Component } from "react";
import { motion } from 'framer-motion';
import { Port } from "../global";

const Portfolio = () => {
  {
    return (
      <Port>
        <div className="Cards">
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
            <div className="card-content">
                <h2 className="card-title">Blog</h2>
              <p className="card-body">lorem ipsum</p>
              <a href="https://github.com/Voltair88/node-test" target="_blank" className="button">
                Click
              </a>
            </div>
          </motion.div>
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
                <h2 className="card-title">Blog</h2>
              <p className="card-body">lorem ipsum</p>
              <a href="https://github.com/Voltair88/node-test" target="_blank" className="button">
                Click
              </a>
            </div>
          </motion.div>
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
                <h2 className="card-title">Blog</h2>
              <p className="card-body">lorem ipsum</p>
              <a href="https://github.com/Voltair88/node-test" target="_blank" className="button">
                Click
              </a>
            </div>
          </motion.div>
          <motion.div className="blogcard" whileHover={{ scale: 1.1 }}>
            <div className="card-content">
                <h2 className="card-title">Blog</h2>
              <p className="card-body">lorem ipsum</p>
              <a href="https://github.com/Voltair88/node-test" target="_blank" className="button">
                Click
              </a>
            </div>
          </motion.div>
        </div>
      </Port>
    );
  }
};
export default Portfolio;
