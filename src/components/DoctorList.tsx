import React,{useContext} from "react";
import SingleDoctor from "./SingleDoctor";
import {DoctorContext, DoctorContextType} from "../contexts/DoctorContext";
import './DoctorFind.css';
export default function DoctorList() {
  const [text, setText] = React.useState('');
  const { doctors } = React.useContext(DoctorContext) as DoctorContextType;
  return (
    <div  className='body'>
    {/* <div className="input_wrapper" placeholder="search User">
       <input
         type ="text"
         placeholder="search User"
         value={text}
         onChange={(e) => setText(e.target.value)}
         />
       <button>Search</button>
    </div> */}
       <div className='body1'>
        <div className='item_grid'>
          {
        doctors.map((doctor)=>
          <div>
            <SingleDoctor key={doctor.id} doctor={doctor} />
          </div>
        )
      }
        </div>
    </div>
</div>
   
  );
  
}
