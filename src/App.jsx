import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import { Routes, Route, Link } from "react-router-dom";
import News from './pages/News&Insight'
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'


function App() {

  return (
    <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
    </div>
  )
}

export default App
