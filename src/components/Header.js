import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/"
            className="text-2xl font-bold text-gentle-black hover:opacity-80 transition-opacity"
          >
            Koli
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-gentle-black hover:text-gray-600 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;