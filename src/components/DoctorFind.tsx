import React from 'react'
import './DoctorFind.css';
import Data from "./doctorPictures.json";

const DoctorFind: React.FC =() =>{ 
    const [text, setText] = React.useState('');
  return (
      <div className='body'>
    <div className='title'>
        <div className='navbar navbar-2'>
            <h1>Home</h1>
        </div>
        <div className='navbar'>
        <h1>Admin</h1>
        </div>
    </div>
    <div className="input_wrapper" placeholder="search User">
       <input
         type ="text"
         placeholder="search User"
         value={text}
         onChange={(e) => setText(e.target.value)}

         />
       <button>Search</button>
    </div>
    <div className='body1'>
    <div className='item_grid'>
        {Data?.length>0 && Data?.map(doctor =>{
             return(
                 
                 <div className='lign_bo'>
                 <div className=''>
                     
                     <div className='body_item'>
                     <div className='img_item'>
                     <img src={doctor.profilePicture} alt="profile"/>
                     </div>
                     <div className='text_item'>
                     <h3>Nmae: {doctor?.name}</h3>
                     <div className='para_item'>
                         <div>
                            <p>{doctor.biography}</p>
                            <p>Wainut Creek</p>  
                         </div>
                            <button>Request Appointment</button>
                     </div>
                     <div className='info_text'>
                         <div className='para'>
                         <p>Phone:0788393331</p>
                        <p>Fox:0788393332</p>
                         </div>
                     </div>
                     </div>
                     </div>
                 </div>
                 </div>
             )
        })}
    </div>
    </div>
    </div>
  )
}

export default DoctorFind