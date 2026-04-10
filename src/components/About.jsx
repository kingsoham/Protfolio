import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCode, FiDownload } from "react-icons/fi";
import { 
  SiReact, 
  SiTailwindcss, 
  SiMongodb, 
  SiFastapi, 
  SiGit 
} from "react-icons/si";

export default function About() {
  const Aboutdata = [
    {
      icon: <FiBookOpen size={20} />,
      title: "Education",
      desc: "B.Tech in AI & Data Science (AIDS) - Sanjay Ghodawat University",
    },
    {
      icon: <FiAward size={20} />,
      title: "Prof. Learning",
      desc: "Full Stack, AI/ML, Quantum Computing, IoT - NxtWave Institute",
    },
    {
      icon: <FiCode size={20} />,
      title: "Soft Skills",
      desc: "Leadership, Team Management, Problem Solving, Innovation",
    },
  ];

  const Tools = [
    { icon: <SiReact size={24} />, title: "React js" },
    { icon: <SiTailwindcss size={24} />, title: "Tailwind CSS" },
    { icon: <SiMongodb size={24} />, title: "MongoDB" },
    { icon: <SiGit size={24} />, title: "Git" },
    { icon: <FiCode size={24} />, title: "MERN Stack" },
    { icon: <FiCode size={24} />, title: "Python" },
  ];

  return (
    <div id="about" className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide py-20 px-6 md:px-12">
        
        {/* --- BG EFFECTS --- */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute inset-0 z-[15] pointer-events-none" style={{ background: "radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)" }}></div>

        {/* --- STATIC FRAME IMAGE (LEFT 45%) --- */}
        <div className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block" style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}>
            <img 
               src="/soham.png" 
               alt="About Profile" 
               className="w-full h-full object-cover opacity-70 filter brightness-[0.85] contrast-[1.2] drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]" 
            />
            {/* Added a subtle cyan overlay for theme matching */}
            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/0 via-[#020202]/0 to-[#020202] pointer-events-none" />
        </div>

        {/* --- CONTENT (RIGHT 55%) --- */}
        <div className="relative z-[50] w-full lg:w-[80%] flex flex-col md:flex-row items-center justify-end">
            
            {/* Visual Gap for the face mask area */}
            <div className="hidden lg:block w-[35%] h-full"></div>

            {/* Main Content Pane */}
            <div className="w-full lg:w-[65%] flex flex-col space-y-10 pointer-events-auto bg-black/40 backdrop-blur-sm p-8 md:p-12 border border-white/5 rounded-2xl">
                {/* Header */}
                <div className="space-y-2">
                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">SYSTEM INFO</p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
                        About Me<span className="text-blue-500">.</span>
                    </h2>
                </div>

                {/* Bio Paragraph */}
                <div className="robotic-section">
                    <p className="text-gray-400 text-sm md:text-md lg:text-xl font-light leading-relaxed max-w-2xl">
                        I am an <span className="text-white font-medium">Artificial Intelligence & Data Science</span> student and 
                        a passionate <span className="text-white font-medium">Full Stack Developer</span>. 
                        I specialize in building AI-powered solutions and modern web applications with a focus on impact and innovation.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Aboutdata.map((item, index) => (
                        <motion.div 
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 bg-white/10 border border-white/20 hover:border-blue-500/40 transition-all duration-300 rounded-xl"
                        >
                            <div className="text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                            <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Dock */}
                <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Core Tech Stack</h4>
                    <div className="flex flex-wrap gap-5">
                        {Tools.map((tool, index) => (
                            <motion.div 
                                key={tool.title} 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative p-4 bg-black/50 border border-white/5 hover:border-blue-500/50 transition-all rounded-xl flex items-center justify-center cursor-help"
                            >
                                <div className="text-gray-500 group-hover:text-blue-400 transition-colors">
                                    {tool.icon}
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[70] whitespace-nowrap shadow-xl">
                                    {tool.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                    <a 
                        href="/resume.pdf" 
                        className="inline-flex items-center space-x-6 px-12 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg shadow-blue-900/20"
                    >
                        <span>Download Resume</span>
                        <FiDownload size={16} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
