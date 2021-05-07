import React from "react";
import Burger from "./Burger";
import { Nav } from "../global";
import { RiCodeBoxFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <IconContext.Provider value={{ size: "4.5rem", className: "global-class-name" }} >
        <RiCodeBoxFill />
      </IconContext.Provider>
      <div className="name">
        <p>Mattias Gulec</p>
        <p2>Front-End Developer</p2>
</div>
      </div>
      <div className="divider"></div>
      <Burger/>
    </Nav>
  );
};

export default Navbar;
