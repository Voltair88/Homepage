import React from 'react';
import Burger from './Burger';
import { Nav } from "../global";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Mattias Gulec
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar