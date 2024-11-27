import NavBar from '../Navbar/Navbar';
import './Doctors.css'

function Doctors() {
    return (
        <>
        <NavBar/>
        <div>
            <div className="doctors__grid1">
              
                <div className="doctors__card1">
                    <div className="doctors__card__image1">
                        <img src='https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg' alt="doctor" />
                        <div class="doctors__socials1">
                            <span><i className="ri-instagram-line"></i></span>
                            <span><i className="ri-facebook-fill"></i></span>
                          
                        </div>
                    </div>
                    <h4>Dr. Sunil Maity</h4>
                    <p>Homeopathy</p>
                </div>
                
           
                <div className="doctors__card1">
                    <div className="doctors__card__image1">
                        <img src='https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg' alt="doctor" />
                        <div class="doctors__socials1">
                            <span><i className="ri-instagram-line"></i></span>
                            <span><i className="ri-facebook-fill"></i></span>
                          
                        </div>
                    </div>
                    <h4>Dr.Sanatan Samanta</h4>
                    <p>General Phycian</p>
                </div>
               
                
            </div>
            </div>
            </>
            )
}

export default Doctors;