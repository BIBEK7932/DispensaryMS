import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("https://dispensaryms-1-1.onrender.com/admin/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit doctor with ID:", id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dispensaryms-1-1.onrender.com/admin/doctors/${id}`);
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== id));
      console.log("Doctor deleted successfully");
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };

  return (
    <div className="admin-doctors-page">
      <h1>Doctors</h1>
      <div className="doctors-cards-container">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="doctors__card1">
            <div className="doctors__card__image1">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <h4>{doctor.name}</h4>
            <p>{doctor.specialization}</p>
            <div>
              <button onClick={() => handleEdit(doctor._id)}>Edit</button>
              <button onClick={() => handleDelete(doctor._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDoctorsPage;
