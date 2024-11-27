import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { IconName } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"; 
const Afterdctrnav = ({name, profilePhoto}) => {
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        localStorage.removeItem("dctr");
        navigate("/")
    }
  return (
    <div>
          <div className="navbar">
      {/* <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div> */}
        <section>
        <nav className="nav__container">
        <div className="nav__logo">YSS<span>Dispensary</span></div>
        <ul className="nav__links">
        <li className="link"><a href="/logindoctor">All Appointment</a></li>
        <li className="link"><a href="/Videoc">Call Patient</a></li>
        <li className="link"><a href="/logindoctor/sendTime">Send Email</a></li>
        <li className="link"><a href="/logindoctor/sendNextAppoinment">Send Next Appoinment Date</a></li>
        </ul>
       
        <div className="profile__container">
            {/* {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" className="profile__photo" />
            ) : (
              <CgProfile className="profile__icon" />
            )} */}
            <span className="profile__name">{name}</span>
          </div>
        <button id="btn1" onClick={handleLogout}>Logout</button>
      </nav>
      </section>
    </div>
    </div>
  )
}

export default Afterdctrnav;
