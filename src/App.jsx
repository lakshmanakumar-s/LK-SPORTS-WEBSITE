import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/header/header';
import Footer from '../src/footer/footer';
import HomePage from '../src/home/home.'; // Fix extension if it's .jsx or .js
import AboutPage from '../src/about/about';
import ContactPage from '../src/contact/contact';

const App = () => {
  return (
    <Router>
      <Header /> {/* Header stays outside Routes to be visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
