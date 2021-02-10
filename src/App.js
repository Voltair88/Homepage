import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Weather from "./components/Weather";
import { AnimatePresence} from "framer-motion";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Weather">
              <Weather />
            </Route>
          </Switch>
          </AnimatePresence>
        </div>
    </Router>
  );
}

export default App;
