import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Sparkles, Shield, Users, Award, Rocket, Brain, Code, Database, Cpu } from 'lucide-react';
import HeroVideo from "../images/overview/hero4.mp4"
import MissionVideo from "../images/overview/mission3.mp4"
import VisionVideo from "../images/overview/vision.mp4"
gsap.registerPlugin(ScrollTrigger);

const images = {
  mission: [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  ],
  vision: [
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  ]
};

export default function Overview() {
  const missionImagesRef = useRef([]);
  const visionImagesRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Company Overview Animation
      gsap.from('.overview-content', {
        scrollTrigger: {
          trigger: '.overview-section',
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });

      // Logo Animation
      gsap.from('.logo-container', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
      });

      gsap.to('.cloud-icon', {
        y: -15,
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      // Mission Images Animation
      missionImagesRef.current.forEach((img, index) => {
        gsap.fromTo(img,
          {
            opacity: 0,
            scale: 0.8,
            y: index === 0 ? -100 : 0,
            x: index === 1 ? -100 : index === 2 ? 100 : 0
          },
          {
            scrollTrigger: {
              trigger: '.mission-section',
              start: 'top center',
              end: 'bottom center',
              scrub: 1
            },
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            ease: 'power2.out',
            stagger: {
              amount: 0.5
            }
          }
        );
      });

      // Vision Images Animation
      visionImagesRef.current.forEach((img, index) => {
        gsap.fromTo(img,
          {
            opacity: 0,
            scale: 0.8,
            x: index === 0 ? 100 : 0,
            y: index === 1 ? 100 : 0,
            x: index === 1 ? -100 : index === 2 ? 100 : 0
          },
          {
            scrollTrigger: {
              trigger: '.vision-section',
              start: 'top center',
              end: 'bottom center',
              scrub: 1
            },
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            ease: 'power2.out',
            stagger: {
              amount: 0.5
            }
          }
        );
      });

      // Why Choose Us Animation
      gsap.from('.why-choose-card', {
        scrollTrigger: {
          trigger: '.why-choose-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        rotationX: 45,
        duration: 1,
        stagger: 0.2,
        transformPerspective: 1000,
        ease: 'power3.out'
      });

      // Core Values Animation
      gsap.from('.core-value-box', {
        scrollTrigger: {
          trigger: '.core-values-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        rotation: -15,
        duration: 1,
        stagger: 0.2,
        transformOrigin: 'center center',
        ease: 'back.out(1.7)'
      });

      // Contact Form Animation
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-[#050b1f] text-gray-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-50"
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b1f]/80 via-[#050b1f]/60 to-[#050b1f]"></div>
        </div>
        <div className="logo-container text-center relative z-10">
          <div className="cloud-icon mb-6">
            <Cloud className="w-32 h-32 text-blue-400" />
          </div>
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            CloudRaize
          </h1>
          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
            Elevating Expertise through Innovative Cloud Solutions
          </p>
          <div className="container mx-auto px-4">
          <div className="overview-content max-w-4xl mx-auto text-center">
            <br/>
            <p className="text-xl text-blue-200/90 leading-relaxed">
              At CloudRaize-Elevating Expertise, we are pioneers in delivering technology-driven solutions that empower businesses to innovate, scale, and succeed in today's fast-paced digital landscape. With expertise spanning DevOps, Cloud Computing (AWS, GCP, Azure), Data Science, Data Engineering, and Generative AI, we offer tailored services designed to meet the unique challenges of modern enterprises.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Company Overview Section */}

      {/* Mission Section */}
      <section className="mission-section relative min-h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-0 w-[70%] h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-20"
        >
          <source src={MissionVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050b1f]"></div>
      </div>
    </div>
    <div className="relative z-10 container mx-auto px-4 py-32 flex items-center min-h-screen">
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Our Mission
          </h2>
          <p className="text-xl text-blue-200/90 leading-relaxed">
            At Cloud Raize, our mission is to empower businesses with innovative cloud solutions and technology-driven services that foster growth, accelerate digital transformation, and leave a lasting impact on industries. By leveraging cutting-edge technologies such as DevOps services, cloud computing (AWS, GCP, Azure), data science, and generative AI, we provide tailored strategies that help businesses innovate, scale, and thrive in a competitive market.
          </p>
        </div>
        <div className="relative h-[500px]">
          {images.mission.map((src, index) => (
            <img 
              key={index}
                  ref={el => missionImagesRef.current[index] = el}
                  src={src}
                  alt={`Mission ${index + 1}`}
                  className="absolute w-[80%] h-[80%] object-cover rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)]"
                  style={{
                    top: index === 0 ? '0%' : index === 1 ? '30%' : '60%',
                    left: index === 0 ? '0%' : index === 1 ? '20%' : '40%',
                    opacity: 0,
                    transform: `scale(0.8) ${
                      index === 0 ? 'translateX(100px)' : 
                      index === 1 ? 'translateY(100px)' : 
                      'translateX(-100px)'
                    }`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section relative min-h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute right-0 w-[70%] h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
        >
          <source src={VisionVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#050b1f]/30 via-[#050b1f]/50 to-[#050b1f]"></div>
    </div>
    <div className="relative z-10 container mx-auto px-4 py-32 flex items-center min-h-screen">
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="relative h-[500px]">
          {images.vision.map((src, index) => (
            <img
              key={index}
              ref={el => visionImagesRef.current[index] = el}
              src={src}
              alt={`Vision ${index + 1}`}
              className="absolute w-[80%] h-[80%] object-cover rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)]"
              style={{
                top: index === 0 ? '0%' : index === 1 ? '30%' : '60%',
                left: index === 0 ? '0%' : index === 1 ? '20%' : '40%',
                opacity: 0,
                transform: `scale(0.8) ${
                  index === 0 ? 'translateX(100px)' : 
                  index === 1 ? 'translateY(100px)' : 
                  'translateX(-100px)'
                }`
              }}
            />
          ))}
        </div>
        <div className="space-y-8">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Our Vision
          </h2>
          <p className="text-xl text-purple-200/90 leading-relaxed">
            At Cloud Raize, we envision a future where businesses seamlessly integrate cloud computing solutions, AI-driven strategies, and data engineering to achieve unparalleled growth. Our vision is to establish ourselves as a global leader in technology consulting, helping organizations across industries embrace digital innovation and maintain a competitive edge.
          </p>
        </div>
      </div>
    </div>
  </section>

      {/* Core Values Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Core Values
          </h2>
          <div className="core-values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Brain className="w-16 h-16" />, 
                title: "Innovation",
                desc: "At Cloud Raize, we prioritize staying ahead of the curve by exploring emerging trends in cloud infrastructure, DevOps automation, and AI technologies. Innovation fuels our ability to deliver creative and impactful solutions that meet diverse client needs."
              },
              { 
                icon: <Users className="w-16 h-16" />, 
                title: "Collaboration",
                desc: "Success is a shared journey. We partner with our clients to craft tailored cloud solutions, leveraging insights and expertise to deliver results that align with their specific goals."
              },
              { 
                icon: <Award className="w-16 h-16" />, 
                title: "Excellence",
                desc: "Every project we undertake is backed by a commitment to high-quality service delivery. From cloud migration strategies to AI-powered business solutions, we ensure our offerings exceed client expectations."
              },
              { 
                icon: <Shield className="w-16 h-16" />, 
                title: "Integrity",
                desc: "We believe that transparency, accountability, and ethical practices form the foundation of lasting business relationships. Integrity drives our approach to every project, ensuring trust at every level of engagement."
              }
            ].map((value, index) => (
              <div key={index} className="core-value-box">
                <div className="glass-card p-8 rounded-2xl text-center h-full transform transition-all duration-500 hover:translate-y-[-10px] hover:scale-105">
                  <div className="mb-6 text-cyan-400">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-200">{value.title}</h3>
                  <p className="text-blue-200/80">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 bg-[#030712]">
        <div className="container mx-auto px-4">
          <div className="why-choose-content">
            <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Why Choose CloudRaize?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: <Code className="w-12 h-12 text-cyan-400 mb-4" />,
                  title: "Expertise Across Domains", 
                  desc: "Deep knowledge in DevOps services, cloud computing platforms like AWS, GCP, and Azure, as well as generative AI and data engineering."
                },
                { 
                  icon: <Cpu className="w-12 h-12 text-cyan-400 mb-4" />,
                  title: "Tailored Solutions", 
                  desc: "Customized solutions to address the specific challenges and opportunities in your industry."
                },
                { 
                  icon: <Award className="w-12 h-12 text-cyan-400 mb-4" />,
                  title: "Proven Track Record", 
                  desc: "We have a history of enabling businesses to achieve transformative outcomes through our expertise."
                },
                { 
                  icon: <Database className="w-12 h-12 text-cyan-400 mb-4" />,
                  title: "Comprehensive Support", 
                  desc: "From strategy to execution, we provide end-to-end support for your digital transformation journey."
                }
              ].map((item, index) => (
                <div key={index} className="why-choose-card">
                  <div className="glass-card p-8 rounded-2xl h-full transform transition-all duration-500 hover:translate-y-[-10px] hover:scale-105">
                    {item.icon}
                    <h3 className="text-2xl font-bold mb-4 text-blue-200">{item.title}</h3>
                    <p className="text-blue-200/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section relative py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Contact Us
          </h2>
          <p className="text-xl text-center text-blue-200/80 mb-12">
            Ready to transform your business? Get in touch with us today!
          </p>
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form max-w-xl mx-auto space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-800 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-800 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-800 text-blue-100 placeholder-blue-400/60 focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#030712]">
        <div className="container mx-auto px-4 text-center text-blue-200/60">
          <p>&copy; {new Date().getFullYear()} CloudRaize. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}