import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { motion } from 'framer-motion';

export default class Navbar extends Component {
    render () {

        return (
            <div className='Nav'>
                <NavLink to="/" className='Navlink' activeClassName="active">Home</NavLink>
                <NavLink to="/about" className='Navlink'>About</NavLink>
                <NavLink to="/portfolio" className='Navlink'>Portfolio</NavLink>
                <NavLink to="/Weather" className='Navlink'>Weather</NavLink>
            </div>
        )
    }
}
