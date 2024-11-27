
import Afterdctrnav from '../Navbar/Afterdctrnav';


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './s.css'; // Import your CSS file

const SendNextAppoinment = () => {
  const form = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_te2q4ul', 'template_nc4wy2e', form.current, {
        publicKey: '4szml8Fz9o08QgNpk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setModalVisible(true); // Show the modal on successful email send
          window.location.reload(); // You may choose to reload the page as well
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (<>  
  <Afterdctrnav/> 
    <div className="send-time-container">
      <form ref={form} onSubmit={sendEmail} className="send-time-form">
        <label htmlFor="a_name">Name</label>
        <input type="text" id="a_name" defaultValue="YSS Sitibinda" name="a_name" />
        <label htmlFor="a_email">Email</label>
        <input type="email" id="a_email" name="a_email" />
        <label htmlFor="adate">Next Appoinment Date</label>
        <input type="date" id="adate" name="adate" />
        {/* <label htmlFor="atime">Time</label>
        <input type="text" id="atime" name="atime" placeholder="Enter appointment Time" />
        <label htmlFor="atime">Room Code</label>
        <input type="text" id="atime" name="aroomcode" placeholder="Enter Room Code" /> */}
        <input type="submit" value="Send" className="send-time-btn" />
      </form>

      {modalVisible && (
        <div className="modal-background">
          <div className="modal-content">
            <h2>Success!</h2>
            <p>Your appointment has been successfully booked.</p>
            <button onClick={() => setModalVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SendNextAppoinment;
