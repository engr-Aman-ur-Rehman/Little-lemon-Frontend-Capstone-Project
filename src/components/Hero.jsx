import React from 'react'
import RestaurantFood from '../assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="container">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga nam nihil similique dolores, unde tempora earum ducimus autem harum minima voluptatibus pariatur? Suscipit debitis rerum ut perferendis at veritatis, ex harum alias officiis eaque fuga odit natus beatae sint!</p>
          <button><Link to="booking">Reserve a table</Link></button>
        </div>
        <img src={RestaurantFood}  alt="Little Lemon Restaurant Food" />
      </div>
    </section>
  )
}

export default Hero