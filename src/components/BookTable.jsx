import React from 'react'
import BookingForm from './BookingForm'

const BookTable = ({ availableTimes, setAvailableTimes, submitForm }) => {
  return (
    <section id='booktable'>
      <div className="container">
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />
      </div>
    </section>
  )
}

export default BookTable