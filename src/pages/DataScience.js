import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Database, 
  LineChart,
  Bot,
  Cpu,
  PieChart,
  Network,
  Workflow,
  Binary,
  MessageSquareCode,
  AlertCircle
} from 'lucide-react';
import HeroVideo from "../images/datascience/hero.mp4"
gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    icon: <Workflow className="w-12 h-12 text-purple-400" />,
    title: "Data Strategy and Consulting",
    point1: "Develop data strategies aligned with business objectives.",
    point2: "Create actionable roadmaps for data collection, management, and utilization.",
    point3: "Optimize data workflows for maximum impact.",
    image: require("../images/datascience/img1.jpg")
  },
  {
    icon: < BarChart3 className="w-12 h-12 text-purple-400" />,
    title: "Data Modeling and Analytics",
    point1: "Design predictive and prescriptive models to forecast trends.",
    point2: "Perform advanced statistical analyses for actionable insights",
    point3: "Implement machine learning algorithms for automation and innovation.",
    image: require("../images/datascience/img2.jpg")
  },
  {
    icon: <Database className="w-12 h-12 text-purple-400" />,
    title: "Big Data Analytics",
    point1: "Process and analyze large datasets with tools like Hadoop and Spark.",
    point2: "Leverage real-time analytics platforms for instant decision-making.",
    point3: "Design scalable data pipelines for seamless data flow.",
    image: require("../images/datascience/img3.jpg")
  },
  {
    icon: <Network className="w-12 h-12 text-purple-400" />,
    title: "Business Intelligence and Reporting",
    point1: "Develop interactive dashboards with Power BI and Tableau.",
    point2: "Enable self-service analytics for stakeholders.",
    point3: "Provide real-time insights through automated reporting.",
    image: require("../images/datascience/img4.jpg")
  },
  {
    icon: <MessageSquareCode className="w-12 h-12 text-purple-400" />,
    title: "Natural Language Processing (NLP)",
    point1: "Build chatbots, sentiment analysis tools, and text summarization models.",
    point2: "Extract insights from unstructured data like social media and customer feedback.",
    point3: "Enable voice-to-text and language translation capabilities.",
    image: require("../images/datascience/img5.jpg")
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    title: "AI-Powered Decision Support",
    point1: "Leverage AI algorithms to enhance decision-making processes.",
    point2: "Implement recommendation systems for personalized user experiences.",
    point3: "Enable anomaly detection for operational efficiency.",
    image: require("../images/datascience/img6.jpg")
  }
];

function ServiceCard({ icon, title, point1 , point2 ,point3, image, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        rotateY: index % 2 === 0 ? -30 : 30
      },
      {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1,
        ease: "power3.out"
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="relative group">
      <div className="glass-card rounded-xl p-6">
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            {icon}
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b1f] via-[#050b1f]/60 to-transparent"></div>
          </div>
          <p className="text-blue-200/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point1}
          </p>
          <p className="text-blue-200/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point2}
          </p>
          <p className="text-blue-200/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DataScience() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-content > *", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out"
      });

      // Floating animation for hero elements
      gsap.to(".hero-float", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Section headers animation
      gsap.from(".section-header", {
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050b1f] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-30"
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b1f]/80 via-[#050b1f]/60 to-[#050b1f]"></div>
        </div>
        
        <div className="hero-content relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="hero-float mb-8">
            <Brain className="w-24 h-24 mx-auto text-cyan-400 opacity-80" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Advanced Data Science Services
          </h1>
          <br/>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 px-4 py-2 ">
          Unleashing the Power of Data-Driven Decisions
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-200/90">
          At CloudRaize, we harness the transformative potential of data science
to provide insight-driven solutions. Our advanced data science services empower
businesses to extract meaningful insights, optimize operations, and innovate with
condence.
          </p>
          <Link 
            to="#services"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Sections */}
      <section ref={servicesRef} id="services" className="relative py-24">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${require('../images/datascience/back.jpg')})` }}></div>
        <div className="container mx-auto px-4 relative">
           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Comprehensive Data Science Service Offerings
              </h2>
            
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} index={index} />
                ))}
              </div>
            
         
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-[#030712]">
        <div className="container mx-auto px-4 text-center text-blue-200/60">
          <p>&copy; {new Date().getFullYear()} DataRaize. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
