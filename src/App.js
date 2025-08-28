import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/contact';
  
  return (
    <div className="min-h-screen bg-white text-gentle-black">
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;