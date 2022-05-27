import React from "react";
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
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Ul>
    </ThemeProvider>
  );
};

export default RightNav;
