import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Mentorship from './pages/Mentorship';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'
import Networking from './pages/Networking';
// import Courses from './pages/Courses';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/networking" element={<Networking />}/>
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
