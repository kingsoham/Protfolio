import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const mainCertificates = [
    {
      title: "Autonomous Vehicle Participation",
      date: "13-11-2025",
      image: "/cert1.png"
    },
    {
      title: "Robotic Arms 101",
      date: "12-03-2026",
      image: "/cert2.jpg"
    },
    {
      title: "Murf.AI Hackathon",
      date: "26-03-2026",
      image: "/cert3.jpg"
    },
    {
      title: "Base 44 Hackathon",
      date: "28-11-2025",
      image: "/cert4.png"
    },
    {
      title: "Smart India Hackathon 2025",
      date: "19-09-2025",
      image: "/cert5.png"
    },
    {
      title: "State-Level Buildathon Qualifier",
      date: "2025",
      image: "/cert6.png"
    },
    {
      title: "Generative AI Mastery Workshop",
      date: "15-09-2025",
      image: "/cert7.png"
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

      // 1. Header Animation
      tl.fromTo(headerRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.1 }
      );

      // 2. Main Certificates Grid Stagger
      tl.fromTo(".certificate-card", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.3, ease: "none", stagger: 0.1 },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="certificates" 
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#000] text-white overflow-hidden scroll-mt-24"
    >


      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-sm mb-4">
          <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.5em]">CERTIFICATES MODULE</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          Certifications<span className="text-blue-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-blue-500/40 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-500 font-light text-base leading-relaxed">
          Professional certifications and specialized training modules completed through leading institutes and industrial programs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Certificates Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? mainCertificates : mainCertificates.slice(0, 3)).map((cert) => (
            <div
              key={cert.title}
              className="certificate-card group bg-white/10 border border-white/20 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] transition-all duration-300 rounded-sm overflow-hidden flex flex-col"
            >
              <div className="w-full h-[250px] overflow-hidden relative bg-[#050505] flex items-center justify-center p-2">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 mix-blend-overlay"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow border-t border-white/[0.02] bg-[#0c0c0c]">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-[10px] font-mono tracking-widest text-blue-400">{cert.date}</div>
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">
                    <span>View HD</span>
                    <FiArrowRight />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight uppercase leading-snug">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {mainCertificates.length > 3 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500 hover:text-blue-400 transition-colors"
            >
              <span>{showAll ? "SHOW LESS" : "VIEW ALL"}</span>
              <FiArrowRight className={`text-xl transition-transform duration-300 ${showAll ? "-rotate-90 group-hover:-translate-y-2" : "rotate-90 group-hover:translate-y-2"}`} />
            </button>
          </div>
        )}

      </div>


    </section>
  );
}
