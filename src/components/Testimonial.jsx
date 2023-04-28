import React from 'react'

const Testimonial = (props) => {
  return (
    <div className="testimonial">
        <img src={props.image} alt={props.name} />
        <div className="content">
          <h4>{props.name}</h4>
          <h4>{props.rating}</h4>
          <p>"{props.testimonial}"</p>
        </div>
    </div>
  )
}

export default Testimonial