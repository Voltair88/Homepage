import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default class Navbar extends Component {
    render () {

        return (
            <div className='Navbar'>
                <NavLink to="./Home" className='Navlink'>Home</NavLink>
                <NavLink to="/about" className='Navlink'>About</NavLink>
                <NavLink to="/portfolio" className='Navlink'>Portfolio</NavLink>
                <NavLink to="/Weather" className='Navlink'>Weather</NavLink>
            </div>
        )
    }
}
