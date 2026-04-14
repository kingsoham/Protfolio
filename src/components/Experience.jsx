import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCalendar } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  const experienceData = [
    {
      company: "Yukti Yantra",
      role: "Fullstack Developer Intern",
      period: "Jan 2026 – Present",
      logo: "/yukti_yantra.png",
      description: "Responsible for designing and implementing complete web applications, managing both front-end and back-end integration, and ensuring an optimal user experience with modern technologies.",
      current: true
    },
    {
      company: "NxtWave Institute of Advanced Technologies",
      role: "GenAI Club President",
      period: "Sept 2025 – Present",
      logo: "/niat.png",
      description: "Leading the GenAI club by managing teams, organizing workshops, and fostering innovation and learning in Artificial Intelligence boundary Generative AI technologies.",
      current: true
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

      tl.fromTo(".experience-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.2 },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#020202] text-white overflow-hidden scroll-mt-24"
    >
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <div className="inline-block px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-sm mb-4">
          <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em]">Career Profile</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          Experience<span className="text-cyan-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-cyan-500/40 mx-auto mb-8"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col space-y-8">

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="experience-card relative group p-8 md:p-12 bg-white/10 border border-white/20 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300 rounded-2xl flex flex-col md:flex-row gap-8 lg:gap-12 items-center"
          >
            {/* Current Indicator */}
            {exp.current && (
              <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-cyan-400 uppercase">Currently Working</span>
              </div>
            )}

            {/* Company Logo */}
            <div className="mt-12 md:mt-0 w-32 h-32 md:w-48 md:h-48 shrink-0 bg-white border border-white/10 rounded-xl flex items-center justify-center p-4 overflow-hidden transition-all group-hover:border-cyan-500/50">
              <img src={exp.logo} alt={`${exp.company} Logo`} className="w-full h-full object-contain" />
            </div>

            {/* Experience Details */}
            <div className="flex-grow flex flex-col justify-center w-full text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight uppercase">{exp.company}</h3>
              <h4 className="text-cyan-400 text-lg font-mono tracking-widest uppercase mb-4">{exp.role}</h4>

              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6">
                <FiCalendar className="text-cyan-500/50" />
                <span>{exp.period}</span>
              </div>

              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
