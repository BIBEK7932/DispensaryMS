import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const AppointmentForm = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  useEffect(() => {
    // Fetch available time slots for the selected date
    fetchTimeSlots();
  }, [date]);

  const fetchTimeSlots = async () => {
    try {
      const response = await axios.get(`/api/time-slots?date=${date.toISOString()}`);
      setTimeSlots(response.data.timeSlots);
    } catch (error) {
      console.error('Error fetching time slots:', error);
    }
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleTimeSlotChange = (selectedOption) => {
    setSelectedTimeSlot(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTimeSlot) {
      alert('Please select a time slot.');
      return;
    }

    try {
      await axios.post('/api/appointments', {
        date: date.toISOString(),
        timeSlot: selectedTimeSlot.value,
      });
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Date:</label>
          <DatePicker selected={date} onChange={handleDateChange} />
        </div>
        <div>
          <label>Select Time Slot:</label>
          <Select options={timeSlots} onChange={handleTimeSlotChange} />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
