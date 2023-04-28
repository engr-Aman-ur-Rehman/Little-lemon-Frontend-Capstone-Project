import React from 'react'
import FoodCards from './FoodCards'

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="content">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <FoodCards />
      </div>
    </section>
  )
}

export default Highlights