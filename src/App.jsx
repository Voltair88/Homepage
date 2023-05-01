/* eslint-disable no-restricted-globals */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Portfolio, About, Resume, Navbar, Landing } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Resume />
    </Router>
  );
}

export default App;
