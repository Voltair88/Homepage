import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0 auto;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;
/* Navbar */
export const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  .div-link {
    margin: 10px;
  }
  .Navlink {
    padding: 10px 30px;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 1;
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
      border-radius: 8px;
    }
  }
  .div-link {
    margin-top: 5px;
    margin-right: 5px;
  }

  @media (max-width: 456px) {
    .header-right {
      float: none;
      justify-content: flex-start;
    }
  }
  .activ {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
  }
`;
/* Logo */
export const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    text-align: center;
    margin: auto 0;
    font-size: 28px;
  }
`;
/* Landingpage */
export const Landing = styled.div`
  text-align: center;
  .avatar-img {
    height: 250px;
    width: auto;
    padding-top: 5em;
  }

  .banner-text {
    background-color: black;
    opacity: 0.8;
    width: 75%;
    margin: auto;
    border-radius: 10px;
  }

  .banner-text h1 {
    color: white;
    font-size: 5vmax;
    font-weight: bold;
    margin-bottom: 0px;
    padding: 10px;
  }

  .banner-text hr {
    border-top: 5px;
    width: 50%;
    margin: auto;
  }

  .banner-text p {
    color: white;
    font-size: 2vmax;
    padding: 1em;
    margin-top: 0px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: auto;
  }

  .social-links i {
    color: rgb(85, 26, 139);
    font-size: 10vmin;
    padding: 10px;
  }
`;
