import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {DoctorContext, InterfaceDoctor} from "../contexts/DoctorContext";
type doctorsProps = {
    doctor: InterfaceDoctor
}
const SingleDoctor: React.FC<doctorsProps> = ({ doctor }) =>{
  const doctorUrl = "../DoctorsDetails/" + doctor.id;
  return (
  <React.Fragment>
<div className='lign_bo'>
                 <div className=''>
                     <div className='body_item'>

                     <div className='img_item'>
                     <img src={doctor.profilePicture} alt="profile"/>
                     </div>
                     <div className='text_item'>
                     <h3>Name: {doctor.name}</h3>
                     <div className='para_item'>
                         <div>
                            <p>{doctor.specialty}</p>
                            <p>{doctor.city}</p>  
                         </div>
                         <Link to={doctorUrl}>
                            <button>Request Appointment</button>
                            </Link>
                     </div>
                     <div className='info_text'>
                         <div className='para'>
                         <p>Phone: {doctor.phone}</p>
                        <p>Fox:0788393332</p>
                         </div>
                     </div>
                     </div>
                     </div>
                 </div>
                 </div>
                 
</React.Fragment>
    );
}
export default SingleDoctor;