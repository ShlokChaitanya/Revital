import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Terms from './Pages/Terms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './Pages/Privacy';
import ContactUs from './Pages/ContactUs';
import { useEffect } from 'react';
import OurBlogs from './Pages/OurBlogs';
// import Cu from './Pages/CU';

function App() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/ContactUs" element={<Cu />} /> */}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms&Services" element={<Terms />} />
        <Route path="/Terms&Conditions" element={<Terms />} />
        {/* <Route path="/Refund-Policy" element={<Refund />} />
        <Route path="/Shipping-Policy" element={<Shipping />} /> */}
        <Route path="/Blogs" element={<OurBlogs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
