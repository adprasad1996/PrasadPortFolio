import React from "react";

const aboutSections = [
  {
    title: "Frontend Development",
    description:
      "Expertise in crafting responsive, dynamic, and visually appealing web applications using modern frameworks like React.",
    points: ["Interactive UI/UX Design", "React, Redux, and Next.js", "CSS Frameworks (Tailwind, Bootstrap)"],
    color: "indigo-500",
    textColor: "indigo-300",
  },
  {
    title: "Backend Development",
    description:
      "Building robust, scalable server-side solutions using modern technologies and architecture.",
    points: ["Node.js and Express.js", "Database Design (SQL, MongoDB)", "API Development (REST, GraphQL)"],
    color: "purple-500",
    textColor: "purple-300",
  },
  {
    title: "Java Basics Knowledge",
    description:
      "Solid understanding of core Java concepts and object-oriented programming principles.",
    points: ["OOP Concepts", "Java Collections Framework", "Exception Handling"],
    color: "red-500",
    textColor: "red-300",
  },
  {
    title: "Selenium Basics Knowledge",
    description:
      "Experience in leveraging Selenium for web automation testing and scripting.",
    points: ["Selenium WebDriver", "Locators (XPath, CSS)", "Writing Basic Test Scripts"],
    color: "blue-500",
    textColor: "blue-300",
  },
  {
    title: "Problem-Solving",
    description:
      "Tackling complex challenges with a focus on efficient solutions and clean code practices.",
    points: ["Algorithm Optimization", "Debugging & Testing", "Agile Methodologies"],
    color: "green-500",
    textColor: "green-300",
  },
  {
    title: "Collaboration",
    description:
      "Excels in team environments, fostering strong communication and productivity.",
    points: ["Team Leadership", "Code Reviews & Mentorship", "Cross-Functional Collaboration"],
    color: "yellow-500",
    textColor: "yellow-300",
  },
  {
    title: "Continuous Learning",
    description:
      "Staying updated with the latest trends and technologies to deliver innovative solutions.",
    points: ["Tech Conferences", "Open Source Contributions", "Online Learning Platforms"],
    color: "pink-500",
    textColor: "pink-300",
  },
];

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-400 mb-4">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A full-stack developer passionate about building end-to-end solutions that blend creativity and technical precision.
          </p>
        </div>

        {/* Dynamic Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-3xl shadow-lg border-t-4 border-${section.color}`}
            >
              <h3 className={`text-2xl font-bold text-${section.textColor} mb-4`}>
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {section.description}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
