import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    color: #fff;
    text-align: center;
    margin: auto 0;
    font-size: 28px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Mattias Gulec
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar