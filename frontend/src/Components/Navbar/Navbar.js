import React from "react";
import './Navbar.css'
import Login from "../LoginPage/Login1";
import closebtn from './close.png'
import { useEffect } from "react";

function NavBar({ handleLoginClick }) {
 
  useEffect(()=>{
let btn = document.querySelector('#btn1')
let popup = document.querySelector('.loginpopup')
btn.addEventListener('click',function(){
popup.style.display = "flex"
});
let closebtn = document.querySelector('.close')
closebtn.addEventListener('click',function(){
  popup.style.display = "none" 
})
  },[])
  return (
    <div className="navbar">
         <div className="loginpopup">
         <img src={closebtn} className="close" />
      <Login/>
    </div>
        <section>
        <nav className="nav__container">
        <div className="nav__logo" ><a href="/">YSS<span>Dispensary</span></a></div>
        <ul className="nav__links">
          <li className="link"><a href="/">Home</a></li>
          <li className="link"><a href="/#service">Service</a></li>
          <li className="link"><a href="/#about">About Us</a></li>
          <li className="link"><a href="/Doctors">Doctors</a></li>
        </ul>
        {/* <div className="navicon"> <i className="ri-menu-fill"></i></div> */}
       
        <button id="btn1" >Login</button>
      </nav>
      </section>
    </div>
  );
}

export default NavBar;