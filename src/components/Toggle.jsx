import React from "react";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import { ToggleContainer } from "../global";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "dark";

  return (
    <ToggleContainer
      lightTheme={isLight}
      onClick={toggleTheme}
      aria-label="toggle dark/light mode"
    >
      <WbSunnyRoundedIcon />
      <NightsStayOutlinedIcon />
    </ToggleContainer>
  );
};

export default Toggle;
