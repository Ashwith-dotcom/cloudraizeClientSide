import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import HeroVideo from "../images/generativeai/hero.mp4"
import { 
  Sparkles,
  Brain,
  Bot,
  PenTool,
  Database,
  MessageSquare,
  Megaphone,
  Award,
  Settings,
  BarChart,
  HeartHandshake
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    title: "Generative Model Development",
    point1: "Build AI models using GPT, DALL-E, and Stable Diffusion.",
    point2: "Enable natural language generation, image synthesis, and video creation.",
    point3: "Design domain-specific generative solutions.",
    image: require("../images/generativeai/img1.jpg")
  },
  {
    icon: <PenTool className="w-12 h-12 text-purple-400" />,
    title: "AI-Powered Creativity",
    point1: "Develop tools for automated content creation and design.",
    point2: "Implement AI-assisted storytelling and marketing solutions.",
    point3: "Explore AI applications in art, music, and entertainment.",
    image: require("../images/generativeai/img2.jpg")
  },
  {
    icon: <Database className="w-12 h-12 text-purple-400" />,
    title: "Synthetic Data Generation",
    point1: "Create synthetic datasets for AI model training and testing.",
    point2: "Ensure data privacy while maintaining quality and diversity.",
    point3: "Use GANs for realistic data simulation.",
    image: require("../images/generativeai/img3.jpg")
  },
  {
    icon: <Bot className="w-12 h-12 text-purple-400" />,
    title: "Chatbots and Conversational AI",
    point1: "Design and deploy intelligent chatbots for customer service.",
    point2: "Integrate AI-driven virtual assistants into enterprise systems.",
    point3: "Enable multi-lingual, context-aware conversations.",
    image: require("../images/generativeai/img4.jpg")
  }
];

const whyChooseUs = [
  {
    icon: <Award className="w-16 h-16 text-purple-400" />,
    title: "Industry Expertise",
    description: "With years of experience across multiple industries, we provide cutting-edge solutions designed to meet your unique business needs.",
    
  },
  {
    icon: <Settings className="w-16 h-16 text-purple-400" />,
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Our solutions are customized to align with your business objectives.",
    
  },
  {
    icon: <BarChart className="w-16 h-16 text-purple-400" />,
    title: "Proven Track Record",
    description: "Our successful projects speak for themselves. From AI-powered tools to cloud migrations, we've helped businesses scale efficiently.",
    
  },
  {
    icon: <HeartHandshake className="w-16 h-16 text-purple-400" />,
    title: "Comprehensive Support",
    description: "Our relationship doesn't end with project delivery. We offer continuous support to ensure your business thrives post-launch.",
    
  }
];

function ServiceCard({ icon, title, point1 , point2 , point3 , image, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 100
        },
        {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Image merge animation
      gsap.fromTo(imageRef.current,
        {
          scale: 1.2,
          opacity: 0,
          filter: "blur(10px)"
        },
        {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          delay: index * 0.2,
          ease: "power2.out"
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className="relative group perspective-1000">
      <div className="glass-card rounded-xl p-6 transform-gpu transition-all duration-500 hover:translate-z-10 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            {icon}
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <div ref={imageRef} className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b1f] via-[#050b1f]/60 to-transparent"></div>
          </div>
          <p className="text-purple-200/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point1}
          </p>
          <p className="text-purple-200/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point2}
          </p>
          <p className="text-purple-200/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point3}
          </p>
        </div>
      </div>
    </div>
  );
}

function WhyChooseCard({ icon, title, description, image, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      {
        opacity: 0,
        rotateY: -30,
        x: -100
      },
      {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        rotateY: 0,
        x: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="relative group">
      <div className="glass-card rounded-xl p-8 transform transition-all duration-500 hover:translate-y-[-10px]">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6">{icon}</div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-purple-200/80">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function GenerativeAI() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.from(".hero-content > *", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out"
      });

      // Floating animation for hero icon
      gsap.to(".hero-float", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Video reveal animation
      gsap.fromTo(videoRef.current,
        {
          scale: 1.2,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 0.3,
          duration: 2,
          ease: "power2.out"
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050b1f] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b1f]/80 via-[#050b1f]/60 to-[#050b1f]"></div>
        </div>
        
        <div className="hero-content relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="hero-float mb-8">
            <Sparkles className="w-24 h-24 mx-auto text-purple-400 opacity-80" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Revolutionizing Innovation with Generative AI
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-purple-200/90">
          At CloudRaize, we pioneer the use of generative AI technologies
to transform creativity, innovation, and automation. Our solutions empower
businesses to harness AI’s capabilities for groundbreaking applications.
          </p>
          <Link 
            to="#services"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24">
        <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: `url(${require('../images/generativeai/back.jpg')})`,
  }}></div>
        <div className="container mx-auto px-4 relative">
          {/* error textsolve */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Our Comprehensive Generative AI Service Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative py-24">
        <div className="absolute inset-0 opacity-5 transform rotate-180" style={{
    backgroundImage: `url(${require('../images/generativeai/back.jpg')})`,
  }} ></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Why Choose CloudRaize?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <WhyChooseCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24">
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 text-purple-200/80">Contact us today to explore how our Generative AI solutions can take your business to the next level.</p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-[#030712]">
        <div className="container mx-auto px-4 text-center text-purple-200/60">
          <p>&copy; {new Date().getFullYear()} CloudRaize. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}