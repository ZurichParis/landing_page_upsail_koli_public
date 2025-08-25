import React from 'react';

// const links = [
//   {
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/company/upsail-ai/'
//   },
//   {
//     label: 'Instagram',
//     href: 'https://www.instagram.com/upsail.ai/'
//   },
//   {
//     label: 'X',
//     href: 'https://x.com/upsail_ai'
//   },
//   {
//     label: 'TikTok',
//     href: 'https://www.tiktok.com/@upsail.ai'
//   },
//   {
//     label: 'YouTube',
//     href: 'https://www.youtube.com/@upsail.ai'
//   },
//   {
//     label: 'Privacy Policy',
//     href: 'https://www.upsail.ai/privacy'
//   },
// ]

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold text-gentle-black">
            Koli - The AI Vibe Marketer
          </div>

          <div className="flex space-x-8">
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gentle-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Koli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;