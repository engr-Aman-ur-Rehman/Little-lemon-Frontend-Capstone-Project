import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Little Lemon logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="menu">Menu</Link></li>
          <li><Link to="reservations">Reservations</Link></li>
          <li><Link to="order">Order-Online</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header