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
    margin: auto;
    font-family: Mulish, sans-serif;
  }
  
  section:not(#home) {
    margin: 10% auto;
  }
  
  `;

/* Logo */
export const Nav = styled.nav`
  margin: 5px 0 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Mulish, sans-serif;
  margin-bottom: 7rem;
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
  img {
    margin: 0;
    border-radius: 50%;
    width: 50vmin;
    height: 50vmin;
    border: #333 solid 5px;
  }

  .contact-text {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 12rem auto;
    padding: 10px;
    background-color: black;
    opacity: 0.8;
    width: 80vw;
    height: 28rem;
    border-radius: 10px;
  }

  .contact-text h1 {
    color: white;
    font-size: calc(16px + 3vw);
    font-weight: bold;
    padding: 1px;
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
    padding: 3rem 1rem;
    transition: 0.5s ease-in-out;
  }

  .social-links:first-child {
    padding-left: 0px;
  }

  .social-links:last-child {
    padding-right: 0px;
  }

  .social-links i:hover {
    transform: scale(1.1);
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
  @media screen and (max-width: 768px) {
    img {
      width: 80vmin;
      height: 80vmin;
    }
    .contact-text {
      margin: 3rem auto;
      height: 20rem;
    }
    .social-links i {
      font-size: 4rem;
      padding: 1rem 0.5rem;
    }
  }
`;

/* Portfolio */
export const Port = styled.div`
  margin: 4rem;
  @media screen and (max-width: 768px) {
    margin: 2rem;
  }
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
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
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
    color: white;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    font-family: Mulish, sans-serif;
    text-align: center;
    z-index: 1;
  }
  .card-text {
    color: white;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    border-radius: 0 0 10px 10px;
    width: 100%;
    margin: 0;
  }
  .card-stack {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 3vh 0;
  }
  .card-button {
    z-index: 100 !important ;
    margin-bottom: 1vh;
    font-size: 1rem;
    text-decoration: none;
    background-color: #ffffff;
    color: #333333;
    padding: 4px 12px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    width: 6rem;
    height: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
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
    text-align: flex-start;
    font-size: 18px;
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
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
      width: 100%;
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

export const Res = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;

  iframe {
    width: 80vw;
    height: 80vh;
    margin: auto;
    border-radius: 10px;
    margin-bottom: 5rem;
  }

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
