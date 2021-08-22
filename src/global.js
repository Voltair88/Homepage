import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import {
  blogimg,
  stpeople,
  football,
  Quire,
  profile,
  profileimg,
} from "./img/index";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0 auto;
    font-family: Mulish, sans-serif;
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
  flex-direction: row;
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
  font-family: Mulish, sans-serif;
  text-align: center;
  .avatar-img {
    position: relative;
    margin: 0.5% auto 5vh;
    border-radius: 50%;
    width: 50vmin;
    height: 50vmin;
  }
  .avatar-msg {
    pointer-events: none;
    margin: 5px;
  }

  .MuiSvgIcon-root {
    position: absolute;
    top: -7px;
  }

  .top {
    border-radius: 50%;
    margin: 0;
    width: 50vmin;
    height: 50vmin;
    border: #333 solid 5px;
  }
  .bottom {
    border-radius: 50%;
    width: 50vmin;
    height: 50vmin;
    border: #333 solid 5px;
  }
  .avatar-img img {
    position: absolute;
    left: 0;
    right: 0;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
  }
  .avatar-img img.top:hover {
    opacity: 0;
  }

  .banner-text {
    position: relative;
    margin: auto;
    background-color: black;
    opacity: 0.8;
    width: 65vw;
    border-radius: 10px;
  }

  .banner-text h1 {
    color: white;
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 1px;
    margin: auto;
  }

  .banner-text hr {
    border-top: 5px;
    width: 50%;
    margin: auto;
  }

  .banner-text p {
    color: white;
    font-size: calc(8px + 1.5vw);
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
    color: #4267b2;
  }

  .fa-linkedin:hover {
    color: #2867b2;
  }

  .fa-github-square:hover {
    color: #333;
  }

  .fa-twitter-square:hover {
    color: #1da1f2;
  }
`;

/* Portfolio */
export const Port = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .Cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 50vh;
    place-items: center;
    line-height: 1.6;
  }
  .blogcard {
    margin: 10px auto;
    border-radius: 5px;
    padding: 15rem 0 0;
    width: 250px;
    height: auto;
  }
  .blogcard:hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 1);
  }
  .blogcard:nth-child(1) {
    background-image: url(${blogimg});
    background-size: cover;
  }
  .blogcard:nth-child(2) {
    background-image: url(${stpeople});
    background-size: cover;
  }
  .blogcard:nth-child(3) {
    background-image: url(${Quire});
    background-size: cover;
  }
  .blogcard:nth-child(4) {
    background-image: url(${football});
    background-size: cover;
  }
  .card-content {
    border-radius: 0 0 5px 5px;
    padding: 0.5em;
    background: linear-gradient(
      hsl(0 0% 0% / 0) 0%,
      hsl(20 0% 0% / 0.6) 10%,
      hsl(0 0% 0% / 0.8)
    );
  }

  .card-title {
    color: white;
    position: relative;
    padding: auto;
    margin: auto;
  }

  .card-body {
    color: white;
  }

  .contentBox {
    width: 80px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .buttonBox {
    margin: 0 20px 20px;
    position: relative;
    max-width: 200px;
    min-width: 150px;
    flex: 20%;
  }

  .border {
    position: absolute;
    background: none;
    transition: all 0.5s ease-in-out;
  }

  #first > .border:nth-of-type(1) {
    top: 0;
    left: 0;
    border-left: 1px solid white;
    border-top: 1px solid white;
    width: 30px;
    height: 30px;
  }

  #first > .border:nth-of-type(2) {
    bottom: 0;
    right: 0;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    width: 30px;
    height: 30px;
  }

  #first:hover .border {
    width: 102%;
    height: 105%;
  }

  .card-button {
    width: 100%;
    height: 30px;
    position: relative;
    background: rgba(255, 255, 255, 0.27);
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    border: none;
    font-size: 15px;
    outline: none;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  }
`;

export const Me = styled.div`
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .about-text {
    width: 80vw;
    margin: auto;
    border-radius: 10px;
    margin-bottom: 1%;
  }
  .about-text h1 {
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 1px;
    margin: auto;
  }
  .about-text hr {
    border-bottom: 1px solid white;
    width: 90%;
    margin-left: 2px;
  }
  .about-text p {
    font-size: calc(10px + 1.2vw);
    margin-top: 5px;
  }
`;

export const Res = styled.iframe`
  width: 50%;
  height: 88%;
  margin: 0 25%;
  position: absolute;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
