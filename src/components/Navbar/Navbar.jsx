import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-lists">
          <li><a className="navbar-link home-link" href="#home-top" >Home</a></li>
          <li><a className="navbar-link about-link" href="#about-top">About</a></li>
          <li><a className="navbar-link service-link" href="#services-top">Services</a></li>
          <li><a className="navbar-link portfolio-link" href="#portfolio-section">Why Choose Us</a></li>
          <li><a className="navbar-link" href="#contact-top">Contact Us</a></li>
      </ul>
    </nav>
  )
}
