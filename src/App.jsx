


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
 import Search from "./pages/Search";
 import Wishlist from "./pages/Wishlist";
import BlogDetails from "./pages/BlogDetails";
import FAQs from "./pages/FAQS";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import TermsOfUse from "./pages/TermsOfUse";






function App() {
  

  return (
    <>
    <Header/>
    
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
     <Route path="*" element={<NotFound />} />
     <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/search" element={<Search />} />  
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />

     




   </Routes>
    <Footer />
    </>
  );
}

export default App
