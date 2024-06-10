"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    // eurostay project
    id: 1,
    title: "Internship Project as EuroStay",
    description: "Developed a wechat mini-program application for a startup company EuroStay.",
    imgae: "/images/projects/eurostay.jpg",
    tag: ["All", "Full Stack"],
    techStack: ["React"],
    gitUrl: "https://github.com/ZIMUQIN-L/EuroStay",
  },
  {
    // ndicsh: motor search project
    id: 2,
    title: "Motor Industry Report Search Mini-Program",
    description: "Developed a wechat mini-program application for searching motor industry reports.",
    imgae: "/images/projects/ndicsh.jpg",
    tag: ["All", "Full Stack"],
    techStack: ["React", "Spring Boot"],
  },
  {
    // 自动爬虫系统
    id: 3,
    title: "Automatic Web Crawler System",
    description: "Developed a automatic web crawler system for crawling news articles.",
    imgae: "/images/projects/webscrawber.jpg",
    tag: ["All", "Full Stack"],
    techStack: ["Python", "Flask"],
  },
  {
    id: 4,
    title: "Personal Blog",
    description: "Developed a personal blog website.",
    imgae: "/images/projects/blog.jpg",
    tag: ["All", "Web"],
    techStack: ["Hexo",],
    gitUrl: "https://github.com/xiangddang/xiangddang.github.io",
    previewUrl: "https://xiangddang.github.io/",
  },
  {
    // clinic project
    id: 5,
    title: "Clinic Management System",
    description: "Developed a clinic management system for a small clinic.",
    imgae: "/images/projects/clinic.jpg",
    tag: ["All", "Full Stack"],
    techStack: ["React", "Spring Boot"],
    gitUrl: "https://github.com/xiangddang/clinic_ms"
  },
  {
    // web development course project
    id: 6,
    title: "Online Marketplace Development",
    description: "Coursework project for Web Development course. ",
    tag: ["All", "Full Stack", "Web"],
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgae: "/images/projects/magic_market.jpg",
    gitUrl: "https://github.com/xiangddang/magic_market",
    previewUrl: "https://magicmarket-frontend-neu.uk.r.appspot.com/",
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
          name="Full Stack"
          isSelected={tag === "Full Stack"}
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
      <a href="https://github.com/xiangddang">
      <img src="https://ghchart.rshah.org/00BFFF/xiangddang" alt="2024 Github Chart" width='800' height='100' />
      </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
