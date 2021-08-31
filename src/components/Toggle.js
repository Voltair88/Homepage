import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';

const ToggleContainer = styled.button`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 5rem;
  height: 3rem;
  margin: 7px auto 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 2rem;
    height: auto;
    transition: all 0.5s linear;
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(200px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-200px)' : 'translateX(0)'};
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'dark';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}           aria-label="toggle dark/light mode"
    >
      <WbSunnyRoundedIcon />
      <NightsStayOutlinedIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;