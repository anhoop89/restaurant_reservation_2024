import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/navbar/NavBar';
import ContactPage from './pages/contact/ContactPage';
import Home from './pages/home/Home';
import Layout from './layout/Layout';
function App() {
  return (
    <Router>
      <NavBar />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </Layout>
    </Router>
  );
}

export default App;