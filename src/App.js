import './App.css';
import { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Booking from './components/Booking';
import { fetchAPI, submitAPI } from './server/api';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {

  function initializeTimes() {
    const times = {
      times: [...fetchAPI(new Date())],
    };
    return times;
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      window.location.href = '/confirmedbooking';
    }
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/booking" element={ <Booking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} /> } />
        <Route path="/confirmedbooking" element={ <ConfirmedBooking /> } />
      </Routes>
    </div>
  );
}

export default App;
