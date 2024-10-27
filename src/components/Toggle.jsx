import React from "react";
import { ToggleContainer } from "../global";
import { BsFillSunFill, BsMoon } from "react-icons/bs";


/**
 * This component renders a toggle switch for light and dark themes.
 * It uses the `theme` prop to determine the current theme and the `toggleTheme` prop to switch themes.
 */

// Start of Selection
const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "dark";

  return (
    <ToggleContainer
      lightTheme={isLight}
      onClick={toggleTheme}
      aria-label="toggle dark/light mode"
      style={
        isLight
          ? { backgroundColor: "#c9c9c9" }
          : { backgroundColor: "#282c36" }
      }
    >
      <BsFillSunFill style={{ color: "black" }} />
      <BsMoon style={{ color: "white" }} />
    </ToggleContainer>
  );
};

export default Toggle;
