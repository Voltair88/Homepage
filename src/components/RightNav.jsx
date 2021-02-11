import React from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom'


const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
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
    border-radius: 0 0 0 8px;
    transition: transform 0.3s ease-in-out;
    .Navlink {
        text-decoration: none; 
        color: #fff;
        border-radius: 8px 0 0 8px;

    }
  }`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
                    <NavLink exact to="/" className='Navlink'activeClassName="activ"  >Home</NavLink>
                    <NavLink to="/about" className='Navlink' activeClassName="activ" >About</NavLink>
                    <NavLink to="/portfolio" className='Navlink' activeClassName="activ">Portfolio</NavLink>
                    <NavLink to="/Weather" className='Navlink' activeClassName="activ">Weather</NavLink>

    </Ul>
  )
}

export default RightNav