import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white text-gentle-black">
      <Header setPage={setPage} />
      {currentPage === 'home' && <Home setPage={setPage} />}
      {currentPage === 'contact' && <Contact setPage={setPage} />}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;