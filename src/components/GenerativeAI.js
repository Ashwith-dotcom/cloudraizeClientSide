import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Code, Image, Music } from 'lucide-react';

export default function GenerativeAI() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ai-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 30,
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
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
          alt="AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-black/80 to-purple-900/95" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="ai-item order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                alt="AI Innovation"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="ai-item order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">
                Generative AI Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Harness the power of cutting-edge AI to transform your creative and operational capabilities.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <Code className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Code Generation</h3>
              <p className="text-gray-300">
                Automate code creation and optimize development workflows
              </p>
            </div>

            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <Image className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Image Synthesis</h3>
              <p className="text-gray-300">
                Create stunning visuals and artwork
with AI assistance
              </p>
            </div>

            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <Music className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Audio Generation</h3>
              <p className="text-gray-300">
                Generate custom soundtracks and audio content
              </p>
            </div>

            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <Sparkles className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Text Creation</h3>
              <p className="text-gray-300">
                Produce engaging content and documentation automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
