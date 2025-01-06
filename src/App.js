import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Mentorship from "./pages/Mentorship";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Networking from "./pages/Networking";
import Layout from "./layout/Layout";
import Certificates from "./pages/Certificate";
const App = () => {
  return (
    <Router>
      <Layout>
        {/* <div> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      {/* <Footer /> */}
      {/* </div> */}
    </Router>
  );
};

export default App;
