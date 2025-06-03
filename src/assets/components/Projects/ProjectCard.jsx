// src/assets/components/Projects/ProjectCard.jsx
import React from "react";

const ProjectCard = ({
  title,
  description,
  techUsed,
  highlights,
  hostedOn,
  projectLink = "#",
  demoLink = "#",
  category, // “React” or “JavaScript”
}) => {
  // Determine badge styling based on category
  const badgeClasses =
    category === "React"
      ? "bg-blue-600 text-white"
      : category === "JavaScript"
      ? "bg-yellow-400 text-gray-900"
      : "bg-gray-400 text-white";

  return (
    <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col h-full">
      {/* TOP-RIGHT BADGE */}
      <div className={`absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded ${badgeClasses}`}>
        {category + " Project"}
      </div>

      {/* CARD CONTENT */}
      {/*
        Add extra top padding (pt-10) so that the title doesn’t overlap with the badge at top-4.
        The original padding was p-6, which gives 1.5rem on all sides (24px). Now we replace p-6 with px-6 py-6+extra.
      */}
      <div className="px-6 pt-10 pb-6 flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-semibold">Tech Used:</span> {techUsed}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-semibold">Highlights:</span> {highlights}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Hosted On:</span> {hostedOn}
        </p>
      </div>

      {/* BUTTON FOOTER */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-between">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          View Project
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Take a Look
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
