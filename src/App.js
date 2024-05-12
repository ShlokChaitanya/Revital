import './App.css';
import Cu from './Pages/CU';
import Home from './Pages/Home';
import Terms from './Pages/Terms';
import { useEffect } from 'react';
// import Refund from './Pages/Refund';
// import Shipping from './Pages/Shipment';
import OurBlogs from './Pages/OurBlogs';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import PrivacyPolicy from './Pages/Privacy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Blogs/:blogId" element={<OurBlogs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/HelpCenter" element={<Cu />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms&Services" element={<Terms />} />
        <Route path="/Terms&Conditions" element={<Terms />} />
        {/* <Route path="/Refund-Policy" element={<Refund />} />
        <Route path="/Shipping-Policy" element={<Shipping />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
