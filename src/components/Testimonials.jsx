import React from 'react'
import Testimonial from './Testimonial'
import Person1 from '../assets/person1.png'
import Person2 from '../assets/person2.png'
import Person3 from '../assets/person3.png'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div>
          <Testimonial image={Person1} name="John Doe" rating="5.0" testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis?" />
          <Testimonial image={Person2} name="Mary Jane" rating="4.7" testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis?" />
          <Testimonial image={Person3} name="Tom McGill" rating="4.9" testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis?" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials