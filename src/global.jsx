import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;

  
  @media (max-width: 1500px) {
    font-size: 1em;
  }
}
  
  body {
    background: ${({ theme }) => theme.gradient};
    color: ${({ theme }) => theme.text};
    margin: 0 auto;
    font-family: Mulish, sans-serif;
  }
  
  section:not(#home) {
    margin: 10% auto;
  }
  
  `;
/* Navbar */
export const Ul = styled.ul`
  display: flex-end;
  flex-flow: row nowrap;
  font-size: 1em;
  top: 10em;
  margin: 0 auto 0 auto;

  @media (pointer: coarse) {
    * {
      padding: 1em;
      font-size: 1em;
    }
  }
  .div-link {
    margin: 10px;
  }
  @media (min-width: 768px) {
    .Navlink {
      padding: 10px 30px;
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      border-radius: 5px;
      transition: all 0.3s cubic-bezier(0.11, -0.66, 0.44, 0.84);
    }
    .Navlink:active {
      background: lightblue;
      color: lightcyan;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0px;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 10;
    top: 0;
    right: 0;
    padding-bottom: 10px;
    padding-top: 3.5rem;
    padding-inline-start: 10px;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;

    .Navlink {
      text-decoration: none;
      color: #fff;
      border-radius: 8px;
      font-size: 1em;
    }
  }
  .div-link {
    margin-top: 15px;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .div-link {
      padding: 10px;
      margin: 15px;
    }
  }

  @media (max-width: 1500px) and (min-width: 769px) {
    .Navlink {
      padding: 10px 20px;
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    .header-right {
      float: none;
      justify-content: flex-start;
    }
  }
`;
/* Logo */
export const Nav = styled.nav`
  margin: 5px 0 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Mulish, sans-serif;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
  .header {
    margin: 0;
    color: ${({ theme }) => theme.text};
  }
  .sub-head {
    margin: 0;
    font-size: 1rem;
  }
  .divider {
    display: flex;
    flex: 1;
  }
`;

/* Landingpage */
export const Land = styled.div`
  font-family: Mulish, sans-serif;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  .avatar-img {
    position: relative;
    margin: 0.5% auto 2vh;
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
  .skeleton {
    animation: skeleton-loading 1s infinite alternate;
  }
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
  .top {
    border-radius: 50%;
    margin: 0;
    width: 50vmin;
    height: 50vmin;
    border: #333 solid 5px;
  }
  .bottom {
    margin: 0;
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

  .contact-text {
    position: relative;
    margin: auto;
    background-color: black;
    opacity: 0.8;
    width: 65vw;
    border-radius: 10px;
  }

  .contact-text h1 {
    color: white;
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 1px;
    margin: auto;
  }

  .contact-text hr {
    border-top: 5px;
    width: 50%;
    margin: auto;
  }

  .contact-text p {
    color: white;
    font-size: calc(8px + 1.5vw);
    margin-top: 0px;
    margin-bottom: 0px;
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
  .port-title {
    font-family: Mulish, sans-serif;
    font-size: 2rem;
    text-align: center;
  }
  .card {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0 0 10px 10px;
  }
  .card-info {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 15vh;
    left: 0;
    right: 0;
    padding-left: 20px;
    border-radius: 0 0px 10px 10px;
    background: rgb(66, 69, 76);
    background: linear-gradient(
      90deg,
      rgba(66, 69, 76, 0.8995973389355743) 0%,
      rgba(66, 69, 76, 0.7) 25%,
      rgba(66, 69, 76, 0.5) 46%,
      rgba(66, 69, 76, 0.3) 65%,
      rgba(124, 126, 131, 0.1) 80%
    );
  }
  .card-title {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    bottom: 7vh;
    font-size: 1.5rem;
    font-family: Mulish, sans-serif;
    text-align: center;
    z-index: 1;
  }
  .card-text {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    font-size: 1rem;
    border-radius: 0 0 10px 10px;
    width: 100%;
    bottom: 6vh;
    margin: 0;
  }
  .card-button {
    z-index: 100 !important ;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vh;
    font-size: 1rem;
    text-decoration: none;
    background-color: #ffffff;
    color: #333333;
    padding: 4px 12px;
    border: 1px solid #42454c;
    border-radius: 8px;
  }
  .card-button:hover {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
  .swiper-container {
    padding-top: 2vh;
    width: 70%;
    margin: auto;
  }
  .swiper {
    display: flex;
    flex-direction: row;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath d='M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    top: 40%;
  }
  .swiper-button-next:after {
    content: "";
  }
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath d='M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    top: 40%;
  }
  .swiper-button-prev:after {
    content: "";
  }

  .swiper-slide img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  .swiper-pagination {
    z-index: 1 !important;
  }
  @media (max-width: 768px) {
    .swiper-slide img {
      border-radius: 0 0 10px 10px;
    }
    .swiper-container {
      width: 100% !important;
      margin: 0 !important;
    }
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
  @media (max-width: 768px) {
    font-size: 1rem;
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

export const ToggleContainer = styled.button`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.body};
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
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(0)" : "translateX(200px)"};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(-200px)" : "translateX(0)"};
    }
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    display: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
