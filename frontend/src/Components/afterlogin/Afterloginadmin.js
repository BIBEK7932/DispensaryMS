// import React, { useEffect, useState } from "react";
// import Afteradminnav from "../Navbar/Afteradminnav";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// const Afterloginadmin = () => {
//   const [data, setData] = useState([]);
//   const location = useLocation();
//   const name = location.state && location.state.name;
//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:5050/admin/get-doctor");
//       setData(res.data.data);
//       console.log(res.data.data);
//     } catch (error) {
//       console.log("Error from the fetching data " + error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const makeDoctor = async (id) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:5050/admin/make-doctor/?id=${id}`
//       );
//       if (res.data.success) {
//         toast.success("Updated succesfully");
//         fetchData();
//       }
//     } catch (error) {
//       console.log("Error " + error);
//     }
//   };
//   return (
//     <>
//       <ToastContainer />
//       <Afteradminnav name={name} />
//       <div>
//         <h1>Hello admin</h1>

//         <h1>Below the lst of all doctor</h1>
//         {data.map((val, ind) => {
//           return (
//             <div key={ind}>
//               <p>name : {val.name}</p>
//               <p> email : {val.email}</p>
//               <p>about : {val.about}</p>
//               <p> status : {JSON.stringify(val.isDoctor)}</p>
//               <button onClick={() => makeDoctor(val._id)}>Make doctor</button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Afterloginadmin;

import React, { useEffect, useState } from "react";
import Afteradminnav from "../Navbar/Afteradminnav";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "./Afterloginadmin.css"; // Import your CSS file for styling

const Afterloginadmin = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const name = location.state && location.state.name;

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dispensaryms-1-1.onrender.com/admin/get-doctor");
      setData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log("Error from fetching data: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const makeDoctor = async (id) => {
    try {
      const res = await axios.put(
        `https://dispensaryms-1-1.onrender.com/admin/make-doctor/?id=${id}`
        

      );
      if (res.data.success) {
        toast.success("Updated successfully");
        fetchData();
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Afteradminnav name={name} />
      <div className="admin-container">
        <h1>Hello Admin</h1>

        <h2>List of All Doctors</h2>
        {data.map((val, ind) => {
          return (
            <div key={ind} className="doctor-card">
              <p><strong>Name:</strong> {val.name}</p>
              <p><strong>Email:</strong> {val.email}</p>
              <p><strong>About:</strong> {val.about}</p>
              <p><strong>Status:</strong> {val.isDoctor ? "Doctor" : "Not a Doctor"}</p>
              <button onClick={() => makeDoctor(val._id)}>Make Doctor</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Afterloginadmin;
