/* import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from "styled-components";

import '../App.css'
export default class Navbar extends Component {
    render () {

        return (
        <div className="navbar">
            <div className="topbar">
                <div className="header-left">
                    <h3>Mattias Gulec</h3>
                </div>
                <div className='header-right'>
                    <NavLink exact to="/" className='Navlink'activeClassName="activ"  >Home</NavLink>
                    <NavLink to="/about" className='Navlink' activeClassName="activ" >About</NavLink>
                    <NavLink to="/portfolio" className='Navlink' activeClassName="activ">Portfolio</NavLink>
                    <NavLink to="/Weather" className='Navlink' activeClassName="activ">Weather</NavLink>
                </div>
            </div>
        </div>
        )
    }
}

 */


import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
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