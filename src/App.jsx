import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Portfolio">
        <Portfolio />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Router>
  );
}

export default App;
