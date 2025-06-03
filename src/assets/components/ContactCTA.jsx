import React from "react";
import { Link } from "react-router-dom";
import { FaCodeBranch } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-lg overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern-dark"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          <span className="block text-indigo-200">Explore the Journey</span>
          <span className="block text-white">Dive into My Creations</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 font-light mb-12 max-w-2xl mx-auto">
          From cutting-edge web applications to innovative projects, discover my work and let's innovate together.
        </p>

        {/* View Portfolio Button */}
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-10 py-4 text-lg font-bold uppercase tracking-wide text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaCodeBranch className="mr-3" /> View My Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
