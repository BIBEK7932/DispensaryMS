import React, { useEffect, useState } from 'react'
import Afterbar from '../Navbar/Afterbar'
import axios from 'axios'
import Afterdctrnav from '../Navbar/Afterdctrnav'
import { useLocation } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './doc.css'
const Afterloginadoctor = () => {
  const today = new Date()
  console.log(today)
  const navigate = useNavigate()
    const location = useLocation();
    const name = location.state && location.state.name
const [data,setData] = useState([])
    const fetchData = async() =>{
        try {
            const res = await axios.get("https://dispensaryms-1-1.onrender.com/doctor/book-data-get-admin")
            console.log(res.data)
            console.log(res.data.data)
            setData(res.data.data)
        } catch (error) {
            console.log("Error" + error)
        }
    }
    const handleDelete = async(id) =>{
      try {
        console.log(id)
        const res = await axios.delete(`https://dispensaryms-1-1.onrender.com/doctor/delete/?id=${id}`)
        console.log(res.data)
        if(res.data.success)
        {
          toast.success("Delete succesfully")
          fetchData()
        }
      } catch (error) {
        console.log("Error " + error)
      }
    }
        useEffect(()=>{
        fetchData()
       
    },[])
    const handleSeeMore = (id) =>{
      navigate(`/see-more-doctor/?id=${id}`)
    }
  return (
    <>
    <ToastContainer/>
   <Afterdctrnav name={name}/>
    <div id='appoinmentList'>
        
    <div style={{}}>
  <table id='appoinmentListT'>
    <thead className='appoinmentListTH'>
      <tr>
        <th>First Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Date</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Mode</th>
        <th>status</th>
        {/* <th>See more</th> */}
      </tr>
    </thead>
    <tbody className='appoinmentListTH'>
      {
        data.map((val, ind) => {
          const appDate = new Date(val.date)
          
          if(appDate >= today){
          return (
            <tr key={ind}>
              <td>{val.fname}</td>
              <td>{val.email}</td>
              <td>{val.address}</td>
              <td>{val.phone}</td>
              <td>{new Date(val.date).toLocaleDateString()}</td>
              <td>{val.stime}</td>
              <td>{val.etime}</td>
              <td>{val.mode}</td>
              {/* <button onClick={()=>handleDelete(val._id)}>Delete</button> */}
              <button onClick={()=>handleSeeMore(val._id)}>See more</button>
              
            </tr>
          )
        }
        })
      }
    </tbody>
  </table>
</div>
    </div>
    </>
  )
}

export default Afterloginadoctor;