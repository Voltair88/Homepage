import React from "react";
import { Portfolio, About, Resume, Navbar } from "./";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Navbar />
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
  );
};

export default Home;
