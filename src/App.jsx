

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ProductDetails from "./pages/ProductDetails";


function App() {
  

  return (
    <>
    <Header/>
    
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About />} />
    <Route path="/Shop" element={<Shop />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
     <Route path="*" element={<NotFound />} />
     <Route path="/product/:slug" element={<ProductDetails />} />

   </Routes>
    <Footer />
    </>
  );
}

export default App
