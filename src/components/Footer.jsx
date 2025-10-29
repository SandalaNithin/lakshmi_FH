import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Facebook, Instagram, Twitter} from 'lucide-react';
import { FaPhoneAlt,FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
    {id: 'Gallery', label: 'Gallery', path: '/Gallery' },
    { id: 'privacy', label: 'Privacy Policy', path: '/privacy' },
 
    // Removed Terms & Conditions
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaWhatsapp, url: 'https://wa.me/9347314512', label: 'WhatsApp' },
    { icon: FaPhoneAlt, url: 'https://tel:+9347314512', label: 'Phone' },
  ];

  return (
    <footer className="bg-gray-100 decoration-black mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
          <a
        href="https://wa.me/9347314512"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center  shadow-xl border-4 border-green transition-all duration-100  hover:scale-110  z-500"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={35} />
      </a>
      <a
        href="tel:+9347314512"
        className="fixed bottom-5 left-8 bg-yellow-500 hover:bg-yellow-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 font-circular z-500"
        aria-label="Call Us"
        >
        <FaPhoneAlt size={35} />
        </a>
     </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-400 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <p className="font-bold text-3xl text-zinc-700">Lakshmi Function Hall</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg text-center md:text-left">
              Lakshmi Function has been a trusted name in the Function hall industry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4 text-blue-400 ">Quick Links</h3>
            <ul className="space-y-2 text-left">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-10 h-10 bg-white-800 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={30} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-blue-400 font-semibold">Lakshmi Function Hall</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
