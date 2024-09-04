import React from 'react'
import './navbar.css'
export const Navbar = () => {
  return (
    <div className='sigmanavbar'>
        <p>Maul Bank</p>
            <div className="LINK">
    <a href="#services" className='SERVICE'>Services</a>
    <a href="#about">About Us</a>
    <a href="#contact">Contact</a>
    <a href="#signup" className="cta">Sign Up</a>
    </div>
  </div>
  )
}
