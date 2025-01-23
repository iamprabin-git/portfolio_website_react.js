import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li className='navbar-item'>
                <NavLink to="/">About</NavLink>
            </li>
            <li className='navbar-item'>
                <NavLink to="/resume">Resume</NavLink>
            </li>
            <li className='navbar-item'>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className='navbar-item'>
                <NavLink to="/blogs">Blog</NavLink>
            </li>
            <li className='navbar-item'>
                <NavLink to="/contact">Contact</NavLink>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar