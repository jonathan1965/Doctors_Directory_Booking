
import React from "react";
import { Link, useParams } from "react-router-dom";
import {DoctorContext, InterfaceDoctor,DoctorContextType} from "../contexts/DoctorContext";
export default function DoctorsDetails(){
    const { doctors } = React.useContext(DoctorContext) as DoctorContextType;
    const { id } = useParams();
    const index = doctors.findIndex(
    (doctor: InterfaceDoctor) => doctor.id == id 
    )

    return(
   <div>
     <div className='title'>
        <div className='navbar navbar-2'>
            <h1>Home</h1>
        </div>
        <div className='navbar'>
        <h1>Admin</h1>
        </div>
    </div>
     <div className="card_Doctor">
     <Link to="/"><p className="arrow">&#8592;</p></Link>
        <div>
            <img src="../assets/pictures/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg"
                alt=""></img>
        </div>
        <div className="card_content">
            <div className="doctor_names">
                <h6>ONLINE NOW</h6>
                <h2>{doctors[index].name}</h2>
                <h3>{doctors[index].specialty}</h3>
            </div>
            <div className="parcentage">
                <div className="good">
                    <h4><span>GOOD NEWS</span><span className="number">95</span></h4>
                    <span className="line"></span>
                </div>
            </div>
            <div className="parcentage">
                <div className="good">
                    <h4><span>TOTAL SCORE</span><span className="number">85</span></h4>
                    <span className="line"></span>
                </div>
            </div>
            <div className="parcentage">
                <div className="good">
                    <h4><span>GOOD NEWS</span><span className="number">90</span></h4>
                    <span className="line"></span>
                </div>

                
            </div>
            <div className="about">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quos. Accusamus sapiente quis ab, excepturi similique enim sit magnam cumque et asperiores adipisci quasi dolorum sint sequi reprehenderit dolor porro?</p>
            </div>
        </div>
        <div className="card_footer">
            <h1><span>Book</span> <span>APPORTMENT</span></h1>
        </div>
    </div>
   </div>
    
    );
} 