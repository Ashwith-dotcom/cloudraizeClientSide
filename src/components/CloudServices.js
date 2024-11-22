import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Database, Shield } from 'lucide-react';

export default function CloudServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cloud-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1483356256511-b48749959172?auto=format&fit=crop&q=80"
          alt="Cloud Services Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="cloud-item">
              <h2 className="text-4xl font-bold text-white mb-6">
                Cloud Services
              </h2>
              <p className="text-xl text-gray-300">
                Unlock the full potential of cloud computing with our scalable, flexible, and cost-efficient solutions designed for your success.
              </p>
            </div>
            <div className="cloud-item">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Cloud Technology"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="cloud-item bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors duration-300">
              <Cloud className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Strategy</h3>
              <p className="text-gray-300">
                Expert consulting to define and implement your optimal cloud strategy for long-term success.
              </p>
            </div>

            <div className="cloud-item bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors duration-300">
              <Database className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Infrastructure Optimization</h3>
              <p className="text-gray-300">
                Optimize your cloud infrastructure for maximum efficiency and cost-effectiveness.
              </p>
            </div>

            <div className="cloud-item bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors duration-300">
              <Shield className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Security & Compliance</h3>
              <p className="text-gray-300">
                Implement robust security measures while maintaining regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}