import React from "react";
import { Port } from "../global";
import { motion } from "framer-motion";
import { blogimg, stpeople, football, Quire } from "../img/index";

const Portfolio = () => {
  return (
    <Port>
      <h1 className="port-title">Portfolio</h1>
      <div className="Cards">
        <div className="card">
          <h2 className="port-cate">Live</h2>
          <motion.div
            className="blogcard"
            style={{
              backgroundImage: `url(${blogimg})`,
              backgroundSize: "cover",
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <div className="card-content">
              <h1 className="card-title">
                Quire
                <a
                  href="https://github.com/Voltair88/fe20tp1_-Vellum-"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" />
                </a>
              </h1>
              <p className="card-body">
                Quire is an online note-taking application.
              </p>
              <div className="contentBox">
                <div id="first" className="buttonBox">
                  <div className="border"></div>
                  <div className="border"></div>
                  <a
                    href="http://vellum.surge.sh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="card-button">Live</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="blogcard"
            style={{
              backgroundImage: `url(${stpeople})`,
              backgroundSize: "cover",
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <div className="card-content">
              <h1 className="card-title">
                Star Wars API{" "}
                <a
                  href="https://github.com/Voltair88/star-wars-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" />
                </a>
              </h1>
              <p className="card-body">
                A simple API for Star Wars data.
                <br />
                <br />
              </p>
              <div className="contentBox">
                <div id="first" className="buttonBox">
                  <div className="border"></div>
                  <div className="border"></div>
                  <a
                    href="https://elegant-aryabhata-b3ff31.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="card-button">Live</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="card">
          <h2 className="port-cate">Github</h2>
          <motion.div
            className="blogcard"
            style={{
              backgroundImage: `url(${Quire})`,
              backgroundSize: "cover",
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <div className="card-content">
              <h1 className="card-title">Blog</h1>
              <p className="card-body">
                A blog made with node and ejs.
                <br />
                <br />
              </p>
              <div className="contentBox">
                <div id="first" className="buttonBox">
                  <div className="border"></div>
                  <div className="border"></div>
                  <a
                    href="https://github.com/Voltair88/node-test"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="card-button">Github</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="blogcard"
            style={{
              backgroundImage: `url(${football})`,
              backgroundSize: "cover",
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <div className="card-content">
              <h2 className="card-title">Football Statistics</h2>
              <p className="card-body">
                Powered by Football-Data and API-Sports
              </p>
              <div className="contentBox">
                <div id="first" className="buttonBox">
                  <div className="border"></div>
                  <div className="border"></div>
                  <a
                    href="https://github.com/Voltair88/fe20tp2_bev_-5-"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="card-button">Github</button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Port>
  );
};
export default Portfolio;
