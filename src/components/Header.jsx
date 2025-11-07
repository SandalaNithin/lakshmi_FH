import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/Gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="font-bebas text-white font-bold text-lg md:text-xl">L</span>
            </div>
            <span className={`text-lg md:text-3xl font-bold hidden sm:inline transition-colors duration-300 ${
              isScrolled ? 'text-zinc-600' : 'text-gray-500'
            }`}>
              Lakshmi Function Hall
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 ${
                    isScrolled
                      ? isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                      : isActive
                        ? 'text-green bg-white/10'
                        : 'text-blue hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-blue-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

