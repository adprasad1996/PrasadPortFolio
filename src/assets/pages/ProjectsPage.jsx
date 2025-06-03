// src/assets/pages/ProjectsPage.jsx
import React from "react";
import ProjectList from "../components/Projects/ProjectList";

const projects = [
  // React Projects
  {
    title: "MovieHub – Movie Listing and Rating App",
    description:
      "A MERN stack web application where users can browse, search, and rate movies. Backend built using Express.js and MongoDB.",
    techUsed: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT, Axios",
    highlights: "Full-stack CRUD operations, secure login, real-time API integration",
    hostedOn: "Render (Backend), Vercel (Frontend)",
    projectLink: "https://your-moviehub-demo.com",
    demoLink: "https://github.com/yourusername/moviehub",
    category: "React",
  },
  {
    title: "E-Commerce Cart System",
    description:
      "Developed a full-stack shopping cart application with user registration, login, product listing, and cart management.",
    techUsed: "React.js, Redux Toolkit, Node.js, Express.js, MongoDB, Material UI",
    highlights: "JWT authentication, role-based access, cart state persistence",
    hostedOn: "Railway (Backend), Netlify (Frontend)",
    projectLink: "https://your-ecommerce-demo.com",
    demoLink: "https://github.com/yourusername/ecommerce-cart",
    category: "React",
  },
  {
    title: "WeatherWise – Real-Time Weather Forecast App",
    description:
      "A weather forecasting application that allows users to search for current weather and forecast data by city.",
    techUsed: "React.js, Node.js, Express.js, OpenWeatherMap API, Tailwind CSS",
    highlights: "Real-time data fetching, clean UI, reusable components, mobile-first design",
    hostedOn: "Netlify (Frontend), Render (Backend)",
    projectLink: "https://your-weatherwise-demo.com",
    demoLink: "https://github.com/yourusername/weatherwise",
    category: "React",
  },
  // JavaScript Projects
  {
    title: "To-Do List App",
    description:
      "A simple to-do list application with local storage for task management. Users can add, edit, and delete tasks.",
    techUsed: "HTML, CSS, JavaScript, Local Storage",
    highlights: "Local storage integration, responsive design, CRUD operations",
    hostedOn: "GitHub Pages",
    projectLink: "https://your-todo-demo.com",
    demoLink: "https://github.com/yourusername/todo-list",
    category: "JavaScript",
  },
  {
    title: "Trivia Quiz Game",
    description:
      "A fun trivia quiz game built using JavaScript with multiple-choice questions and a scoring system.",
    techUsed: "HTML, CSS, JavaScript",
    highlights: "Interactive UI, real-time scoring, responsive design",
    hostedOn: "GitHub Pages",
    projectLink: "https://your-trivia-demo.com",
    demoLink: "https://github.com/yourusername/trivia-quiz",
    category: "JavaScript",
  },
  {
    title: "Weather App",
    description:
      "A weather application using OpenWeatherMap API that displays current weather data for any city.",
    techUsed: "HTML, CSS, JavaScript, OpenWeatherMap API",
    highlights: "API integration, responsive design, real-time data fetching",
    hostedOn: "GitHub Pages",
    projectLink: "https://your-weatherapp-demo.com",
    demoLink: "https://github.com/yourusername/weather-app",
    category: "JavaScript",
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-gray-100 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">My Projects</h1>
          <p className="mt-4 text-lg text-gray-600">
            Here are a few of my React and JavaScript projects.
          </p>
        </div>

        {/* Pass projects (with `category`) to ProjectList */}
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
