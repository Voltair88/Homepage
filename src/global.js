import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;

export const Ul = styled.ul`
display: flex;
flex-flow: row nowrap;
.div-link{
  margin: 10px;
}
.Navlink {
  padding: 10px 30px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
@media (max-width: 768px) {
  margin-top: 0px;
  flex-flow: column nowrap;
  background-color: #0D2538;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 1 ;
  top: 0;
  right: 0;
  width: 150px;
  padding-bottom: 10px;
  padding-top: 3.5rem;
  padding-inline-start: 10px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  .Navlink {
      text-decoration: none; 
      color: #fff;
      border-radius: 8px ;

  }
}`;