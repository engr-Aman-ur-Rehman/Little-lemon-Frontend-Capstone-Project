import React from 'react'
import ApprovalAnimated from "../assets/icons8-approval.gif";
import Footer from './Footer';
import Header from './Header';

const ConfirmedBooking = () => {
  return (
    <>
        <Header />
        <div className='confirmedbooking'>
            <div className="container">
                <h1>Your have reserved table successfully!</h1>
                <img src={ApprovalAnimated} alt="Animated Approval" />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ConfirmedBooking