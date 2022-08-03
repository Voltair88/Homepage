/* eslint-disable no-restricted-globals */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Portfolio, About, Resume, Navbar, Landing } from "./components";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <Navbar />
        <Parallax speed={-10} translateY={[50, -50, "easyInOutQuint"]}>
          <Landing />
        </Parallax>
        <Parallax speed={-10} translateY={[50, -50, "easyInOutQuint"]}>
          <About />
        </Parallax>
        <Parallax speed={-10} translateY={[50, -50, "easyInOutQuint"]}>
          <Portfolio />
        </Parallax>
        <Resume />
      </ParallaxProvider>
    </Router>
  );
}

export default App;
