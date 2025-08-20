import React from 'react';

const Header = ({ setPage }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-2xl font-bold text-gentle-black cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setPage('home')}
          >
            Upsail
          </div>
          <button
            onClick={() => setPage('contact')}
            className="px-4 py-2 text-gentle-black hover:text-gray-600 transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;