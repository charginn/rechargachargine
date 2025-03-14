import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import HomeSection from './Components/Home/HomeSection';
import AboutSection from './Components/About/AboutSection';
import ProductSection from './Components/ProductSection';
import Newsletter from './Components/NewsLetter';
import ContactSection from './Components/Contact/ContactSection';


const App = () => {
  return (
    <Router>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/home" element={<HomeSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/product" element={<ProductSection />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<ContactSection />} />
      
      </Routes>
    </Router>
  );
};

export default App;
