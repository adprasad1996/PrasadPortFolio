// src/assets/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/your-github-profile', icon: <FaGithub /> }, // REPLACE with your actual GitHub URL
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-linkedin-profile', icon: <FaLinkedin /> }, // REPLACE with your actual LinkedIn URL
    { name: 'Email', href: 'mailto:your.email@example.com', icon: <FaEnvelope /> }, // REPLACE with your actual email
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

        {/* Copyright Information */}
        <p className="text-sm font-light">
          &copy; {currentYear} PrasadPortfolio. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label={link.name}
            >
              <span className="sr-only">{link.name}</span> {/* For screen readers */}
              {link.icon && React.cloneElement(link.icon, { className: 'text-2xl' })}
            </a>
          ))}
        </div>

        {/* Additional Info (Optional) */}
        <p className="text-sm text-gray-500 hidden md:block">
          Crafted with ❤️ in Hyderabad, India.
        </p>
      </div>
    </footer>
  );
};

export default Footer;