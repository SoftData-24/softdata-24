import React from 'react'
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <>
      <header className="header" id="home-top">
      <img src="/assets/images/logo.png" alt="SoftData24" width="200" height="auto" />

      <Navbar />

      <div className="mobile-navbar-btn">
        <ion-icon className="mobile-nav-icon" name="menu-outline"></ion-icon>
        <ion-icon className="mobile-nav-icon" name="close-outline"></ion-icon>
      </div>
      </header>
    </>
  )
}
