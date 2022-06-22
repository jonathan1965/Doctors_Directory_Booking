import React from 'react'
import './DoctorFind.css';


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
    </div>
  )
}

export default DoctorFind