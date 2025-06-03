import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiRedux } from 'react-icons/si';

const TechnologiesSection = () => {
  // Define your technologies dynamically
  const frontendTechnologies = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  const backendTechnologies = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Mongoose (ODM)', icon: <FaDatabase className="text-red-500" /> }, // Using a generic DB icon
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background patterns for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          My Expertise: <span className="text-indigo-600">Full Stack MERN Developer</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          I craft dynamic and responsive web applications from concept to deployment, leveraging a robust stack of modern technologies.
        </p>

        {/* Frontend Technologies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center">
            <FaReact className="text-blue-500 mr-3" /> Frontend Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {frontendTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-gray-100 w-full max-w-[180px] h-[160px]"
              >
                <div className="text-6xl mb-3">{tech.icon}</div>
                <p className="text-lg font-semibold text-gray-800 text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Technologies Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center">
            <FaNodeJs className="text-green-600 mr-3" /> Backend & Database
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {backendTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-gray-100 w-full max-w-[180px] h-[160px]"
              >
                <div className="text-6xl mb-3">{tech.icon}</div>
                <p className="text-lg font-semibold text-gray-800 text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information/Context */}
        <div className="mt-20 bg-indigo-50 rounded-xl shadow-inner p-8 text-center max-w-4xl mx-auto border border-indigo-200">
          <p className="text-xl text-indigo-800 font-medium mb-4">
            My journey as a **Full Stack MERN Developer** involves creating robust and scalable applications. From crafting pixel-perfect UIs with modern frontend frameworks to designing efficient APIs and managing databases, I cover the entire development cycle.
          </p>
          <p className="text-lg text-indigo-700">
            I continuously explore new tools and best practices to deliver high-quality, performant, and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;