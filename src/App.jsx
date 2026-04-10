import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Lazy load non-critical sections for performance
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Certificates = lazy(() => import('./components/Certificates'));
const Portfolio = lazy(() => import('./components/Portfolio'));

const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="h-screen bg-black" />}>

        <About />
        <Education />
        <Experience />
        <Portfolio />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
