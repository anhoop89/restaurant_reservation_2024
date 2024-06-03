import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/navbar/NavBar';
import ContactPage from './pages/contact/ContactPage';
import Home from './pages/home/Home';
import Layout from './layout/Layout';
import MainReservation from './components/resvervation/MainReservation';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // True: Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <Router>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservation" element={<MainReservation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;