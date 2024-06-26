import React from "react";
import { RiCodeBoxFill } from "react-icons/ri";
import Toggle from "./Toggle";
import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Nav } from "../global";
import { useDarkMode } from "../useDarkMode";

const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "dark" ? lightTheme : darkTheme;

  return (
    <Nav>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="logo">
          <RiCodeBoxFill style={{ fontSize: "4rem" }} />
          <div className="name">
            <p className="header">Mattias Gulec</p>
            <p className="sub-head">Front-End Developer</p>
          </div>
        </div>
        <div className="divider"></div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Nav>
  );
};

export default Navbar;
