import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900 bg-opacity-95 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand Name */}
        <div>
          <Link to="/" className='text-3xl lg:text-4xl font-extrabold text-white tracking-wider animate-pulse-subtle'>
            Prasad<span className="text-purple-400">PortFolio</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lg font-medium text-white transition-all duration-300 ease-in-out group
                          ${location.pathname === link.path
                            ? 'font-bold text-purple-400 bg-red-800 px-4 py-2 rounded-lg' // Active style with red background
                            : 'text-white hover:text-purple-300 hover:bg-gray-700 hover:p-2 hover:rounded' // Corrected // Regular hover style
                          }`}
            >
              {link.name}
              {/* Underline effect for hover on non-active links */}
              {!location.pathname === link.path && (
                <span className="absolute left-0 bottom-0.5 h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-3xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded p-1">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (conditionally rendered with animation) */}
      <div className={`md:hidden fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md transition-transform duration-300 ease-in-out transform origin-top
                       ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
                       style={{ top: '68px' }}
      >
        <div className="flex flex-col items-center py-6 space-y-6 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleNavbar}
               className={`w-full text-center text-xl py-3 font-semibold transition-all duration-300 ease-in-out
                          ${location.pathname === link.path
                            ? 'font-bold text-purple-400 bg-red-700' // Active style
                            : 'text-white hover:text-purple-300 hover:bg-gray-700 focus:text-purple-300 focus:bg-gray-700 active:text-purple-300 active:bg-gray-700' // Non-active: default, hover, focus, active
                          }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;