import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield , Sparkles, Code, Image, Music, MessageSquare, Cpu, Lightbulb, TrendingUp } from 'lucide-react';
import {Link} from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

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
    <div className="bg-blue-900 text-white">
      <section ref={sectionRef} className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="/videos/generative-ai-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="ai-item text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Generative AI Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of cutting-edge AI to transform your creative and operational capabilities. Our generative AI solutions drive innovation, efficiency, and growth across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <Code className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Code Generation</h3>
              <p className="text-gray-300">
                Automate code creation, optimize development workflows, and reduce time-to-market for your software projects.
              </p>
            </div>

            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <Image className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Image Synthesis</h3>
              <p className="text-gray-300">
                Create stunning visuals, artwork, and designs with AI assistance, perfect for marketing, product design, and creative projects.
              </p>
            </div>

            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <Music className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Audio Generation</h3>
              <p className="text-gray-300">
                Generate custom soundtracks, voice-overs, and audio content for various applications, from entertainment to e-learning.
              </p>
            </div>

            <div className="ai-item bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
              <MessageSquare className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Text Creation</h3>
              <p className="text-gray-300">
                Produce engaging content, documentation, and conversational AI solutions to enhance customer experiences and streamline operations.
              </p>
            </div>
          </div>

          <div className="ai-item mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How Generative AI Transforms Industries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
                <p className="text-gray-300">
                  Accelerate drug discovery, improve diagnostic accuracy, and personalize treatment plans with AI-driven insights.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Finance</h3>
                <p className="text-gray-300">
                  Enhance fraud detection, automate risk assessment, and provide personalized financial advice using AI algorithms.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
                <p className="text-gray-300">
                  Optimize production processes, predict maintenance needs, and design innovative products with generative AI.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Retail</h3>
                <p className="text-gray-300">
                  Create personalized shopping experiences, optimize inventory management, and forecast trends using AI-powered analytics.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-gray-300">
                  Develop adaptive learning systems, generate educational content, and provide personalized tutoring with AI assistance.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Entertainment</h3>
                <p className="text-gray-300">
                  Create immersive experiences, generate content, and personalize recommendations in gaming, film, and interactive media.
                </p>
              </div>
            </div>
          </div>

          <div className="ai-item mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Generative AI Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <Cpu className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Cutting-edge Technology</h3>
                <p className="text-gray-300">
                  We leverage the latest advancements in machine learning, natural language processing, and computer vision to deliver state-of-the-art generative AI solutions.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <Lightbulb className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Customized Solutions</h3>
                <p className="text-gray-300">
                  Our team of AI experts works closely with you to understand your unique challenges and develop tailored generative AI solutions that address your specific needs.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <Shield className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Ethical AI Practices</h3>
                <p className="text-gray-300">
                  We prioritize responsible AI development, ensuring transparency, fairness, and privacy in all our generative AI solutions.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <TrendingUp className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Scalable Infrastructure</h3>
                <p className="text-gray-300">
                  Our generative AI solutions are built on scalable cloud infrastructure, allowing you to easily adapt and grow as your needs evolve.
                </p>
              </div>
            </div>
          </div>

          <div className="ai-item mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">E-commerce Giant</h3>
                <p className="text-gray-300 mb-4">
                  Implemented a generative AI system for product description creation, resulting in a 40% increase in conversion rates and improved SEO performance.
                </p>
                <p className="font-semibold">- Sarah Johnson, CMO</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Financial Services Firm</h3>
                <p className="text-gray-300 mb-4">
                  Deployed an AI-powered risk assessment model, reducing fraud incidents by 60% and improving customer trust.
                </p>
                <p className="font-semibold">- Michael Chen, CTO</p>
              </div>
            </div>
          </div>

          <div className="ai-item text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Harness the Power of Generative AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our generative AI solutions can drive innovation and growth for your business. Let's create the future together.
            </p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

