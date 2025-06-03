import React from "react";
import About from "../components/About"; // Importing the About component

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 text-white">
      {/* Header Section */}
      <header className="py-16 text-center bg-gradient-to-r from-indigo-700 to-purple-800 shadow-lg">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
          Welcome to My Journey
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-300 font-light">
          Unveiling my path in technology, my aspirations, and the impact I aim to create in the digital world.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <section className="bg-gray-800 rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border-2 border-purple-600 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-purple-300 text-center">
            Vision & Mission
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-4">
            My vision is to merge technology and creativity, crafting innovative solutions that make a difference. I’m on a mission to empower users through seamless, efficient, and visually compelling web experiences.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
            Every project I undertake is an opportunity to learn, grow, and contribute to the evolving digital landscape, staying committed to quality and user-centric design.
          </p>
        </section>

        {/* About Component */}
        <About />
      </main>
    </div>
  );
};

export default AboutPage;
