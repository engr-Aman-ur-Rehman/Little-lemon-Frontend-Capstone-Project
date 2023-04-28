import React from 'react'
import Logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <img src={Logo} alt="Little Lemon Restaurant Logo" />
        <ul>
          <li>Navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
        <ul>
          <li>Social Media Links</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Foodgram</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer