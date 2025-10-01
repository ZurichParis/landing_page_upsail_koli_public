import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const links = [
   {
    label: 'LinkedIn',
    icon: 'mdi:linkedin',
    href: 'https://www.linkedin.com/company/getkoli/about/?viewAsMember=true'
  },
  {
    label: 'Instagram',
    icon: 'mdi:instagram',
    href: 'https://www.instagram.com/koli_hq/'
  },
//  {
//    label: 'X',
//    icon: 'mdi:x',
//    href: 'https://x.com/upsail_ai'
//  },
//  {
//    label: 'TikTok',
//    icon: 'ic:baseline-tiktok',
//    href: 'https://www.tiktok.com/@upsail.ai'
//  },
  {
    label: 'YouTube',
    icon: 'mdi:youtube',
    href: 'https://www.youtube.com/@Koli_hq'
  },
//  {
//    label: 'Privacy Policy',
//    href: 'https://www.upsail.ai/privacy'
//  },
]

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold text-gentle-black">
            Koli - The AI Vibe Marketer
          </div>
          
          <div className="flex space-x-8">
            {links.map((link) => (
              <div key={link.label} className="text-gray-600 hover:text-gentle-black transition-colors bg-gray-100 rounded-full p-2">
                <a href={link.href}>
                  <Icon icon={link.icon} className="w-6 h-6" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex space-x-8">
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gentle-black transition-colors bg-gray-100 rounded-full p-2 px-4"
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