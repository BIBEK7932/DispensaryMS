import axios from "axios";
import { useEffect, useState } from "react";
import "./Allpatient.css"; // Import the updated CSS file for styling
import Afteradminnav from "../Navbar/Afteradminnav";

const Allpatient = () => {
    const [data, setData] = useState([]);
    const [showMedicineDetails, setShowMedicineDetails] = useState({});

    const fetchData = async () => {
        try {
            const res = await axios.get("https://dispensaryms-1-1.onrender.com/admin/get-all-patient");
            setData(res.data.data);
        } catch (error) {
            console.log("Error fetching data: " + error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSeeMore = (id) => {
        setShowMedicineDetails((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the visibility for the specific appointment ID
        }));
    };

    return (
        <>
            <Afteradminnav />
            <div id='appoinmentList'>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='appoinmentListTH'>
                        {data.map((val, ind) => (
                            <tr key={ind}>
                                <td>{val.fname}</td>
                                <td>{val.email}</td>
                                <td>{val.address}</td>
                                <td>{val.phone}</td>
                                <td>{val.date}</td>
                                <td>{val.stime}</td>
                                <td>{val.etime}</td>
                                <td>{val.mode}</td>
                                <td>
                                    <button onClick={() => handleSeeMore(val._id)}>See more</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {data.map((val, ind) => (
                    <div key={ind} style={{ display: showMedicineDetails[val._id] ? "block" : "none" }}>
                        {val.medicine.map((medicineItem, medIndex) => (
                            <div key={medIndex}>
                                <p>Medicine: {medicineItem.medicine}</p>
                                <p>Next Date: {medicineItem.nextdate}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Allpatient;








