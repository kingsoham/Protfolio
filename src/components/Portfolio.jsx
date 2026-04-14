import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "/portfolio-preview.png",
    title: "My Portfolio",
    tags: ["JavaScript", "CSS", "HTML"],
    description: "A professional personal portfolio showcasing my skills, projects, and work experience.",
    link: "https://protfolio-1c8t.vercel.app/",
    github: "https://github.com/kingsoham/Protfolio",
  },
  {
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    title: "Hill Climbing Racing",
    tags: ["Python"],
    description: "A fun and interactive hill climbing racing game built entirely using Python.",
    link: "#",
    github: "#",
  }
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          Project Showcase
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter"
        >
          Selected Works<span className="text-blue-500">.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {(showAll ? projectData : projectData.slice(0, 3)).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/10 border border-white/20 shadow-xl shadow-cyan-500/5"
          >
            <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem] m-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repository" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiGithub size={20} />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projectData.length > 3 && (
        <div className="mt-16 flex justify-center">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setShowAll(!showAll)}
            className="group flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500 hover:text-blue-400 transition-colors"
          >
            <span>{showAll ? "SHOW LESS" : "VIEW ALL WORKS"}</span>
            <FiArrowRight className={`text-xl transition-transform duration-300 ${showAll ? "-rotate-90 group-hover:-translate-y-2" : "rotate-90 group-hover:translate-y-2"}`} />
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
