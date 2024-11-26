import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from "react-router-dom"
import { Cloud, Database, Brain, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from(servicesRef.current.children, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(aboutRef.current.children, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(ctaRef.current.children, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-blue-900 text-white">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/cloud-overview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to CloudRaize</h1>
          <p className="text-xl mb-8">Empowering businesses with cutting-edge cloud solutions, data science, and AI</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </Link>
            <Link href="/services" className="px-8 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/cloud-services" className="bg-white/5 p-6 rounded-lg shadow-md hover:bg-white/10 transition-colors duration-200">
              <Cloud className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Services</h3>
              <p className="text-gray-300">Scalable and secure cloud solutions tailored to your business needs.</p>
            </Link>
            <Link href="/generative-ai" className="bg-white/5 p-6 rounded-lg shadow-md hover:bg-white/10 transition-colors duration-200">
              <Code className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Generative AI</h3>
              <p className="text-gray-300">Cutting-edge AI solutions to drive innovation and automation.</p>
            </Link>
            <Link href="/data-science" className="bg-white/5 p-6 rounded-lg shadow-md hover:bg-white/10 transition-colors duration-200">
              <Brain className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Science</h3>
              <p className="text-gray-300">Transform your data into actionable insights with advanced analytics.</p>
            </Link>
            <Link href="/data-engineering" className="bg-white/5 p-6 rounded-lg shadow-md hover:bg-white/10 transition-colors duration-200">
              <Database className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-gray-300">Build robust data pipelines and infrastructure for your organization.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/images/about-us.jpg" alt="About CloudRaize" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About CloudRaize</h2>
              <p className="mb-4">CloudRaize is a leading provider of cloud solutions, data science, and AI services. We help businesses harness the power of cutting-edge technologies to drive growth, innovation, and efficiency.</p>
              <p>With a team of experienced professionals and a commitment to excellence, we deliver tailored solutions that address the unique challenges of each client.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" ref={ctaRef} className="py-16 bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-8">Discover how CloudRaize can help you leverage the power of cloud, data, and AI.</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Overview;
