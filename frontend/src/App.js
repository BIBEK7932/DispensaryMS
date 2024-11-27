
import './App.css';
 import Login1 from './Components/LoginPage/Login1';
import Homep from './Components/Home/Homepage.js'
import Videoc from './Components/Videocallpages/Videoc.js';
import RoomPage from './Components/Room/index.js';
import { Routes, Route } from 'react-router-dom';
import SendNextAppoinment from './Components/Appoinment/SendNextAppoinmenr.js';

import Doctors from './Components/Doctors/Doctors.js';
import SendTime from './Components/Appoinment/sendEmail.js';
import Afterloginuser from './Components/afterlogin/Afterloginuser.js';
import Afterloginadoctor from './Components/afterlogin/Afterloginadoctor.js';
import { useEffect, useState } from 'react';
import Afterloginadmin from './Components/afterlogin/Afterloginadmin.js';
import Alluserdetails from './Components/afterlogin/Alluserdetails.js';
import Allpatient from './Components/afterlogin/Allpatientlist.js';
function App() {
  const [auth,setAuth] = useState("")
  useEffect(()=>{
   const token = localStorage.getItem("token");
    setAuth(token)
  },[])
  return (
    <div className="App">
   
 
 <Routes>
 <Route path='/' element={<Homep/>}/>
<Route path='/Login1' element={<Login1/>}/>
<Route path='/Videoc' element={auth==null ? <Login1/> : <Videoc/>}/>
<Route path='/Doctors' element={<Doctors/>}/>
<Route path='/login' element={<Login1/>}/>
<Route path='/loginuser' element={auth==null ? <Login1/> : <Afterloginuser/>}/>
<Route path='/logindoctor' element={auth==null ? <Login1/> : <Afterloginadoctor/>}/>
<Route path="/Videoc/Room/:RoomId"   component={RoomPage} element={auth==null ? <Login1/> : <RoomPage/>} />
<Route path="/loginadmin"   component={Afterloginadmin} element={auth==null ? <Login1/> : <Afterloginadmin/>} />
<Route path='/logindoctor/sendTime' element={<SendTime/>} />
<Route path='/logindoctor/sendNextAppoinment' element={<SendNextAppoinment/>} />
<Route path='/see-more-doctor' element={<Alluserdetails/>} />
<Route path='/all-patient' element={<Allpatient/>} />

</Routes> 

{/* <DoctorsPage/> */}

     
    </div>
  );
}

export default App;

