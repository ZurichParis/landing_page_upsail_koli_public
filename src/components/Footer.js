import React from 'react';

const Footer = ({ setPage }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold text-gentle-black">
            Koli - Your AI Marketing Assistant
          </div>
          
          <div className="flex space-x-8">
            <button
              onClick={() => setPage('contact')}
              className="text-gray-600 hover:text-gentle-black transition-colors"
            >
              Contact
            </button>
            <a
              href="#"
              className="text-gray-600 hover:text-gentle-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gentle-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Upsail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;