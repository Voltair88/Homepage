import React from "react";
import { ToggleContainer } from "../global";
import { BsFillSunFill, BsMoon } from "react-icons/bs";


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
