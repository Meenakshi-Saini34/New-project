import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from './component/Navbar';
import Home from "./pages/Home"

function App() {


  return (
    <React.Fragment>
     {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/learning" element={<Contact />} /> */}
    </Routes>

  </React.Fragment>

  )
}

export default App
