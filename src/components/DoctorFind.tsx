import React from 'react'
import './DoctorFind.css';

const DoctorFind: React.FC =() =>{
    const doctors = [
        {
            name:'Jonathan',
            age:46,
            designation:'Sofware Engireer'
        },
        {
            name:'Kalisa',
            age:28,
            designation:'Sofware Engireer'
        },
        {
            name:'Amri',
            age:25,
            designation:'Sofware Engireer'
        },
        {
            name:'Roger',
            age:39,
            designation:'Sofware Engireer'
        },
        {
            name:'Clement',
            age:26,
            designation:'Sofware Engireer'
        },
        {
            name:'Roger',
            age:39,
            designation:'Sofware Engireer'
        }
    ]
    const [doctorList, setDoctorList] = React.useState(doctors);  
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
        {doctorList?.length>0 && doctorList?.map(doctor =>{
             return(
                 <div>
                 <div className='body_item'>
                     <h3>Nmae: {doctor?.name}</h3>
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