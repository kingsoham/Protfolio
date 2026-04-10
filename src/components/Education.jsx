import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiBookOpen, FiArrowRight, FiAward, FiTarget } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const educationData = [
    {
      institution: "NxtWave Institute of Advanced Technologies (NIAT)",
      degree: "B.Tech AIDS",
      major: "Artificial Intelligence",
      duration: "2025 – 2029",
      logo: "/niat.png",
      link: "https://www.niatindia.com/"
    },
    {
      institution: "Sanjay Ghodawat University",
      degree: "B.Tech",
      major: "Artificial Intelligence and Data Science",
      duration: "August 2025 – 2029",
      logo: "/sgu.png",
      link: "https://www.sguk.ac.in/"
    },
    {
      institution: "KILBIL NATIONAL SCHOOL",
      degree: "5th – 10th Grade",
      major: "Focused on building strong academic foundations with excellence in Mathematics and Science",
      duration: "2018 – 2023",
      logo: "/kns.png",
      link: "https://kilbilnationalschool.org.in/"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(headerRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.1 }
      );

      tl.fromTo(".education-card", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.3, ease: "none", stagger: 0.1 },
        "-=0.2"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="education" 
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#000] text-white overflow-hidden scroll-mt-24"
    >
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <div className="inline-block px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-sm mb-4">
          <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em]">ACADEMIC MODULE</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          Education<span className="text-cyan-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-cyan-500/40 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-500 font-light text-base leading-relaxed">
          Academic background and formal education shaping the foundation of technical expertise.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Education Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="education-card group p-10 bg-white/10 border border-white/20 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300 rounded-sm flex flex-col items-start"
            >
              <div className="flex justify-between w-full mb-8">
                <div className="w-16 h-16 bg-white border border-white/10 rounded-sm flex items-center justify-center p-1 overflow-hidden transition-all group-hover:border-cyan-500/50">
                  <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-gray-500 group-hover:text-cyan-500/50 transition-colors pt-2">
                  {edu.duration}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{edu.institution}</h3>
              <h4 className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4">{edu.degree}</h4>
              
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-10 flex-grow">
                {edu.major}
              </p>
              
              <a href={edu.link} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 hover:text-cyan-400 group/btn transition-colors">
                <span>Visit Website</span> 
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
