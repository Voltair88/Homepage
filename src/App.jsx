import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Portfolio, About, Resume, Navbar, Landing } from "./components";

function App() {
  return (
    <Router>
      <>
        <section id="home">
          <Navbar />
          <Landing />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </>
    </Router>
  );
}

export default App;
