


import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Alluser.css";
import Afterdctrnav from "../Navbar/Afterdctrnav";
const Alluserdetails = () => {
  const location = useLocation();
  const param = new URLSearchParams(document.location.search);
  const id = param.get("id");
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://dispensaryms-1-1.onrender.com/user/get-data-user/?id=${id}`
      );
      console.log(res.data.data);
      setData(res.data.data);
    } catch (error) {
      console.log("Error" + error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [post, setPost] = useState({
    medicine: "",
    nextdate: "",
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const submitHandle = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `https://dispensaryms-1-1.onrender.com/user/save-medicine/?id=${id}`,
        post,
        config
      );
      toast.success("Added");
    } catch (error) {
      console.log("Error" + error);
    }
  };
  return (
    <div className="container4">
      
      <ToastContainer />
      <div className="form-container4">
        <h1 className="title4">Add medicine</h1>
        <form action="#" onSubmit={submitHandle}>
                <div>
            <td>{data.fname}</td> 
            <br/>
            <td>{data.email}</td>
            <br/>
            {/* <td>{data.address}</td> */}
            <td>{data.phone}</td>
            <br/>
            {/* <td>{data.date}</td>
            <td>{data.stime}</td>
            <td>{data.etime}</td> */}
            <td>{data.mode}</td>        </div>
          <textarea
            className="textarea4"
            type="text"
            placeholder="medicine"
            onChange={handleInput}
            name="medicine"
          />
          <input
            className="input4"
            type="date"
            placeholder="Next visit date"
            onChange={handleInput}
            name="nextdate"
          />
          <button className="button4" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Alluserdetails;
