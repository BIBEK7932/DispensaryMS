

// export default DoctorsList;
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://your-backend-url/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="doctors__grid1">
      {doctors.map((doctor) => (
        <div className="doctors__card1" key={doctor.id}>
          <div className="doctors__card__image1">
            <img src={doctor.image} alt="doctor" />
          </div>
          <h4>{doctor.name}</h4>
          <p>{doctor.specialty}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorsPage;



