import React from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom'
import { motion } from 'framer-motion';


const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  .div-link{
    margin: 10px;
  }
  .Navlink {
    padding: 10px 30px;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 1 ;
    top: 0;
    right: 0;
    width: 150px;
    padding-bottom: 10px;
    padding-top: 3.5rem;
    padding-inline-start: 10px;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    .Navlink {
        text-decoration: none; 
        color: #fff;
        border-radius: 8px ;

    }
  }`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <motion.div className="div-link" whileHover={{ scale: 1.1 }}>
        <NavLink exact to="/" className="Navlink" activeClassName="activ">
          Home
        </NavLink>
      </motion.div>
      <motion.div className="div-link" whileHover={{ scale: 1.1 }}>
        <NavLink to="/about" className="Navlink" activeClassName="activ">
          About
        </NavLink>
      </motion.div>
      <motion.div className="div-link" whileHover={{ scale: 1.1 }}>
        <NavLink to="/portfolio" className="Navlink" activeClassName="activ">
          Portfolio
        </NavLink>
      </motion.div>
      <motion.div className="div-link" whileHover={{ scale: 1.1 }}>
        <NavLink to="/Weather" className="Navlink" activeClassName="activ">
          Weather
        </NavLink>
      </motion.div>
    </Ul>
  );
}

export default RightNav