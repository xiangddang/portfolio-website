"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTage) => {
    setTage(newTage);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section>
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgae}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project}
            />
          </motion.li>
        ))}
      </ul>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mt-6">
      <img src="https://ghchart.rshah.org/00BFFF/xiangddang" alt="2024 Github Chart" width='800' height='100'/>
      </div>
    </section>
  );
};

export default ProjectsSection;
