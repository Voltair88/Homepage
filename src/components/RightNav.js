import React from 'react';
import { NavLink} from 'react-router-dom'
import { motion } from 'framer-motion';
import { Ul } from "../global";
import { useDarkMode } from '../useDarkMode';
import Toggle  from "./Toggle";
import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../global';

const RightNav = ({ open }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'dark' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
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
      <motion.a className="div-link" whileHover={{ scale: 1.1 }} without rel="noopener noreferrer" target="_blank">
        <NavLink to="/Resume" className="Navlink" activeClassName="activ">
          Resume
        </NavLink>
        </motion.a>
        <Toggle theme={theme} toggleTheme={toggleTheme} />

    </Ul>
    </ThemeProvider>
  );
}

export default RightNav