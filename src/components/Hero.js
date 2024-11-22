import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={require("../images/hero.jpeg")}
          alt="Hero Background"
          className="w-full h-full object-cover backdrop-brightness-150"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="hero-text text-4xl md:text-6xl font-bold text-white mb-6">
          Empowering Businesses with Future-Ready Cloud Solutions
        </h1>
        <p className="hero-text text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Unlock the full potential of cloud computing with scalable, flexible, and cost-efficient solutions designed for your success.
        </p>
        <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}