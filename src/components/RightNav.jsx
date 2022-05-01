import React from "react";
import { Ul } from "../global";
import { useDarkMode } from "../useDarkMode";
import Toggle from "./Toggle";
import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { NavHashLink } from "react-router-hash-link";

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
          <NavHashLink to="/#home" className="Navlink" activeClassName="activ">
            Home
          </NavHashLink>
        </div>
        <div className="div-link">
          <NavHashLink to="/#about" className="Navlink" activeClassName="activ">
            About
          </NavHashLink>
        </div>
        <div className="div-link">
          <NavHashLink
            to="/#portfolio"
            className="Navlink"
            activeClassName="activ"
          >
            Portfolio
          </NavHashLink>
        </div>
        <div className="div-link">
          <NavHashLink
            to="/#resume"
            className="Navlink"
            activeClassName="activ"
          >
            Resumé
          </NavHashLink>
        </div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Ul>
    </ThemeProvider>
  );
};

export default RightNav;
