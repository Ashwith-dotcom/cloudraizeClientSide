import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CloudServices from './components/CloudServices';
import DevOpsSection from './components/DevOpsSection';
import DataScience from './components/DataScience';
import GenerativeAI from './components/GenerativeAI';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.config({
      autoSleep: 60,
      force3D: true
    });
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <CloudServices />
      <DevOpsSection />
      <DataScience />
      <GenerativeAI />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;