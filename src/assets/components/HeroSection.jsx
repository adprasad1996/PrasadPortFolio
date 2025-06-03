import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 
import portFolioImg from '../utils/images/portFolioImg.png';
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-indigo-950 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
        {/* Photo Card */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-deep p-6 md:p-8 transform hover:scale-[1.02] transition-transform duration-500 ease-in-out border-2 border-indigo-600">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-purple-500 ring-4 ring-indigo-300 ring-offset-4 ring-offset-gray-900 mx-auto transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
            <img
              src={portFolioImg}
              alt="Prasad's Profile"
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* About Me Card */}
        <div className="bg-gray-800 text-white rounded-3xl shadow-deep p-8 sm:p-10 md:p-12 max-w-xl transform hover:scale-[1.02] transition-transform duration-500 ease-in-out border-2 border-purple-600">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 tracking-tight leading-snug drop-shadow-md">
            Hello, I'm <span className="font-dancing-script text-6xl sm:text-7xl text-purple-200">Prasad</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed text-center md:text-left text-gray-300 font-light">
            A passionate <span className="text-purple-400 font-bold">Frontend Developer</span> with a love for creating modern and interactive web applications. I blend creativity and technical skills to bring concepts to life with an artistic touch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-10 py-4 bg-purple-600 text-white rounded-full shadow-lg font-semibold text-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-center"
            >
              View My Work <FaArrowRight className="ml-3" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white rounded-full shadow-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-center"
            >
              Get In Touch <FaArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
