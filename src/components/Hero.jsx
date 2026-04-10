import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  
  const textContainerRef = useRef(null);
  const roleWrapperRef = useRef(null);
  const subtitleWrapperRef = useRef(null);
  const highlightWrapperRef = useRef(null);

  useEffect(() => {
    // Simulate loading for the boot experience
    const timer = setTimeout(() => setLoaded(true), 1500);
    
    // --- SYSTEM BOOT OPENING EXPERIENCE ---
    const bootTl = gsap.timeline({ delay: 0.5 });

    // Boot visuals
    bootTl.fromTo('.noise-overlay', { opacity: 0 }, { opacity: 0.15, duration: 1, ease: "none" }, 0);
    bootTl.fromTo('.center-glow', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power1.inOut" }, 0.2);
    
    // Navbar slide in
    bootTl.fromTo('nav', { y: -50, opacity: 0, filter: 'blur(10px)' }, { y: 0, opacity: 1, filter: 'blur(0)', duration: 1, ease: "power2.out" }, 0.5);

    // Initial Image Reveal (Keep scale for feel, but remove initial opacity 0)
    bootTl.fromTo('.hero-static-img', { scale: 0.95 }, { scale: 1, duration: 1.5, ease: "power2.out" }, 0.8);

    // HUD Elements sequence
    bootTl.fromTo('.hud-element', { opacity: 0 }, { opacity: 1, duration: 0.1, stagger: 0.1, ease: "none" }, 1.2);

    // Robotic Text Sequence
    if (textContainerRef.current) {
        bootTl.to('.title-char', { opacity: 1, x: 0, duration: 0.05, stagger: 0.05, ease: "none" }, 1.5);
        bootTl.fromTo(roleWrapperRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3, ease: "none" }, 2.0);
        bootTl.fromTo('.role-underline', { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.3, ease: "none" }, 2.2);
        bootTl.fromTo(subtitleWrapperRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.3, ease: "none" }, 2.4);
    }

    // --- MAIN SCROLL FADE ---
    const tlScroll = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=1000",
            scrub: 0.5,
            pin: true,
            anticipatePin: 1
        }
    });

    tlScroll.to('.portfolio-ui', { opacity: 0, filter: "blur(5px)", duration: 0.1, ease: "none" }, 0.9);
    tlScroll.to('.hero-static-img', { opacity: 0, filter: "blur(10px)", duration: 0.1, ease: "none" }, 0.9);

    return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const titleText = "SOHAM KHANDADE";

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide">
        
        {/* Loading State */}
        {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#020202]">
                <div className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">&gt; INITIALIZING_CORE_SYSTEM</div>
                <div className="w-64 h-[1px] bg-white/10 overflow-hidden">
                    <div className="h-full bg-blue-500 animate-pulse w-full"></div>
                </div>
            </div>
        )}

        {/* --- BACKGROUND EFFECTS --- */}
        <div className="portfolio-ui absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="portfolio-ui noise-overlay absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <div className="portfolio-ui center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none opacity-0 mix-blend-screen z-[1]"></div>

        {/* --- HUD ELEMENTS --- */}
        <div className="portfolio-ui absolute top-28 left-8 md:top-32 md:left-12 z-[60] font-mono text-[10px] text-blue-400 tracking-widest hidden sm:flex flex-col space-y-1.5 pointer-events-none">
            <span className="hud-element opacity-0">&gt; SYSTEM ONLINE</span>
            <span className="hud-element opacity-0">&gt; INITIALIZING PORTFOLIO v2.0</span>
            <span className="hud-element opacity-0">&gt; NEURAL LINK ESTABLISHED</span>
        </div>
        <div className="portfolio-ui absolute bottom-12 right-8 md:bottom-12 md:right-12 z-[60] font-mono text-[10px] text-gray-600 tracking-widest text-right hidden sm:flex flex-col space-y-1.5 pointer-events-none">
            <span className="hud-element opacity-0">SECURE SYS_ID: REACT_GSAP</span>
            <span className="hud-element opacity-0">COORD: 34.0522 N / 118.2437 W</span>
        </div>

        {/* --- SOCIAL LINKS --- */}
        <div className="portfolio-ui absolute bottom-12 left-8 md:left-12 z-[60] flex flex-col space-y-5">
            <a href="https://github.com/kingsoham" target="_blank" rel="noreferrer" className="w-[18px] h-[18px] flex items-center justify-center social-icon text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/soham-khandade-943848367/" target="_blank" rel="noreferrer" className="w-[18px] h-[18px] flex items-center justify-center social-icon text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                <FiLinkedin size={18} />
            </a>
            <a href="https://instagram.com/soham_reddy10" target="_blank" rel="noreferrer" className="w-[18px] h-[18px] flex items-center justify-center social-icon text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                <FiInstagram size={18} />
            </a>
        </div>

        {/* --- STATIC HERO IMAGE (BACKGROUND) --- */}
        <div className="absolute inset-0 z-[5] hero-static-img scale-100 origin-right pointer-events-none bg-black flex justify-end">
            <img 
              src="/hero.jpeg" 
              alt="Hero Portrait" 
              className="h-full w-auto object-contain object-right opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
        </div>

        {/* --- PORTFOLIO TEXT OVERLAY --- */}
        <div ref={textContainerRef} className="portfolio-ui absolute inset-0 z-[50] pointer-events-none flex flex-col md:flex-row justify-between items-center px-8 md:px-[15%] lg:px-[18%]">
            
            {/* LEFT SIDE: Name and Role */}
            <div className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                {loaded && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-[0.1em] uppercase leading-none" style={{ textShadow: "0 0 20px rgba(255,255,255,0.2)" }}>
                            {titleText}
                        </h1>
                    </motion.div>
                )}
                
                {loaded && (
                    <motion.div 
                        ref={roleWrapperRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative inline-block"
                    >
                        <h2 className="text-sm md:text-md lg:text-lg font-mono text-gray-300 tracking-[0.2em] uppercase pb-2">
                            Full Stack Developer | GenAI Club President
                        </h2>
                        <div className="role-underline absolute bottom-0 left-0 w-full h-[1px] bg-white/60"></div>
                    </motion.div>
                )}
            </div>

            {/* RIGHT SIDE: (Empty now that Explore Work is removed) */}
            <div className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-0 md:pl-8">
            </div>
        </div>
    </div>
  );
}

