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
    margin-top: 15px;
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
  border-bottom: 2px solid;
  margin: 5px;
  display: flex;
  flex-direction:row;
  align-items: center;
  font-family: Mulish, sans-serif;
  .logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-direction: row;
    
padding-top: 5px;
    font-size: 2rem;
  }
  .name {
    border-left: solid 1px;
    padding-left: 5px;
    margin: auto 5px;
    line-height: 0.8;

  }
  p {
    margin: 0;
  }
  p2 {
    margin: 0;
    font-size: 1rem;
  }
  .divider {
    display: flex;
    flex: 1;
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
    font-size: 10vmin;
    padding: 10px;
  }

  .social-links a {
    color: white;
  }

  .fa-facebook-square:hover {
    color: #4267B2;
  }

  .fa-linkedin:hover {
    color: #2867B2;
  }

  .fa-github-square:hover {
    color: #333;
  }

  .fa-twitter-square:hover {
    color: #1DA1F2;
  }
`;
