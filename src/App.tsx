import React from 'react';
import './App.css';
import UserContextProvider from './contexts/DoctorContextProvider';
import DoctorList from './components/DoctorList';
import { Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <UserContextProvider >
      <div className="App w3-padding-large w3-large">
        <Header/>
        <DoctorList/>
      </div>
    </UserContextProvider>
  );
}

export default App;
