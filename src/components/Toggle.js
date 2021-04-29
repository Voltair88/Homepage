import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from './icons/night.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';

const ToggleContainer = styled.button`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 5rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 2rem;
    height: auto;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;