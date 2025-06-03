// src/assets/components/Projects/ProjectList.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-between gap-6 px-4">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-wrap w-80 ">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
