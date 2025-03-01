import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Home/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About/About';
import Product from './pages/Product/product';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>

    
    

  
  );
}

export default App;