import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ContactPage from './components/contact/ContactPage';
import Home from './components/home/Home';
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