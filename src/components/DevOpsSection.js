import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitBranch, Shield, Workflow } from 'lucide-react';

export default function DevOpsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.devops-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="DevOps Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="devops-item order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="DevOps Collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="devops-item order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">
                DevOps Services
              </h2>
              <p className="text-xl text-gray-300">
                Revolutionizing IT operations with seamless integration and automated workflows.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="devops-item bg-white/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <GitBranch className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Continuous Integration & Delivery</h3>
              <p className="text-gray-300">
                Streamline your development pipeline with automated CI/CD processes integrated with robust security checks at every stage.
              </p>
            </div>

            <div className="devops-item bg-white/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">DevSecOps Integration</h3>
              <p className="text-gray-300">
                Embed security practices throughout your development lifecycle, ensuring compliance and protection at every step.
              </p>
            </div>

            <div className="devops-item bg-white/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <Workflow className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Automated Workflows</h3>
              <p className="text-gray-300">
                Implement efficient automation strategies that streamline operations and reduce manual intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}