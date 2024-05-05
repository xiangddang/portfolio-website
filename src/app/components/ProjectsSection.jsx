"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio",
    description: "Project 1 description",
    imgae: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Potography Portfolio",
    description: "Project 2 description",
    imgae: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    imgae: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Food Delivery Application",
    description: "Project 4 description",
    imgae: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Project 5 description",
    imgae: "/images/projects/5.png",
    tag: ["All"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 6 description",
    imgae: "/images/projects/6.png",
    tag: ["All"],
    gitUrl: "https://github.com",
    previewUrl: "https://github.com",
  },
];

const ProjectsSection = () => {
  const [tag, setTage] = useState("All");
  const handleTabChange = (newTage) => {
    setTage(newTage);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTabChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgae}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            tags={project}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
