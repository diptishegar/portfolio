import BgVideo from './media/video/video.mp4';
import './App.css';
import React from "react";
import { 
  BrowserRouter as Router,
   Routes,
   Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Project.js";
import Education from "./components/Education.js";
import Contact from "./components/Contact.js";

import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import './css/loading.css'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout to your needs (e.g., until data is fetched)
  }, []);

  return (
    <>
    {isLoading ? (
        <Loading />
      ) : (
      <div>
        <video autoPlay loop muted className="bg-vid"> <source src={BgVideo} type="video/mp4" /> </video>
      <Router>
      <Navbar/>
          <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Contact' element={<Contact />} />
          </Routes>
      </Router>
      </div>
      )}
      
    </>
  );
}
export default App;
