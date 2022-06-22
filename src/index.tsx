import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DoctorContextProvider from "./contexts/DoctorContextProvider";
import DoctorsDetails from './components/DoctorsDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <DoctorContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                 <Route path="DoctorsDetails/:id" element={<DoctorsDetails/>} />
                <Route index element={<App />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </DoctorContextProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
