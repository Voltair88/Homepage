import React from "react";
import { NavLink } from "react-router-dom";
import { Ul } from "../global";
import { useDarkMode } from "../useDarkMode";
import Toggle from "./Toggle";
import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";

const RightNav = ({ open }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "dark" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Ul open={open}>
        <div className="div-link">
          <NavLink exact to="/" className="Navlink" activeClassName="activ">
            Home
          </NavLink>
        </div>
        <div className="div-link">
          <NavLink to="/about" className="Navlink" activeClassName="activ">
            About
          </NavLink>
        </div>
        <div className="div-link">
          <NavLink to="/portfolio" className="Navlink" activeClassName="activ">
            Portfolio
          </NavLink>
        </div>
        <div className="div-link">
          <NavLink
            to="/Resume"
            className="Navlink"
            activeClassName="activ"
          
          >
            Resume
          </NavLink>
        </div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Ul>
    </ThemeProvider>
  );
};

export default RightNav;
