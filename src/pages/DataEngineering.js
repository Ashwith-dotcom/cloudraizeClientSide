import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import HeroVideo from "../images/dataeng/hero.mp4"
import { 
  Database,
  Server,
  Cloud,
  Shield,
  Award,
  Code,
  Users,
  Lock,
  Workflow,
  BarChart,
  Network,
  Settings
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Database className="w-12 h-12 text-green-400" />,
    title: "Data Infrastructure Setup",
    point1: "Design and deploy data warehouses and lakes using Snowake, Redshift, and BigQuery.",
    point2: "Optimize storage and retrieval for large-scale data.",
    
    image: require("../images/dataeng/img1.jpg")
  },
  {
    icon: <Server className="w-12 h-12 text-green-400" />,
    title: "Data Pipeline Development",
    point1: "Build ETL/ELT pipelines for efficient data processing.",
    point2: "Enable real-time data streaming with Apache Kafka and Flink.",
    point3: "Automate data workflows for reliability and speed.",
    image: require("../images/dataeng/img2.jpg")
  },
  {
    icon: <Cloud className="w-12 h-12 text-green-400" />,
    title: "Cloud Data Engineering",
    point1: "Architect cloud-native data solutions on AWS, Azure, and Google Cloud.",
    point2: "Implement serverless data pipelines for cost-effectiveness.",
    point3: "Enable hybrid and multi-cloud data strategies.",
    image: require("../images/dataeng/img3.jpg")
  },
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Data Governance & Security",
    point1: "Ensure data integrity with governance frameworks.",
    point2: "Implement encryption and role-based access control (RBAC).",
    point3: "Achieve compliance with GDPR, HIPAA, and other standards.",
    image: require("../images/dataeng/img4.jpg")
  }
];

const whyChooseUs = [
  {
    icon: <Award className="w-16 h-16 text-green-400" />,
    title: "Industry Expertise",
    description: "With years of experience across multiple industries, we provide cutting-edge solutions designed to meet your unique business needs."
  },
  {
    icon: <Code className="w-16 h-16 text-green-400" />,
    title: "Technical Excellence",
    description: "Our team of expert engineers brings deep technical knowledge and best practices to every project."
  },
  {
    icon: <Users className="w-16 h-16 text-green-400" />,
    title: "Dedicated Support",
    description: "We provide continuous support and maintenance to ensure your data infrastructure runs smoothly."
  },
  {
    icon: <Lock className="w-16 h-16 text-green-400" />,
    title: "Security First",
    description: "We implement robust security measures to protect your valuable data assets at every level."
  }
];

const caseStudies = [
  {
    title: "Data Warehouse Solution for Retail Chain",
    description: "We developed a highly scalable data warehouse for a leading retail chain, optimizing inventory management and customer insights across multiple regions.",
    icon: <Workflow className="w-12 h-12 text-green-400" />
  },
  {
    title: "Real-Time Data Streaming for Financial Services",
    description: "Implemented real-time streaming for a financial services firm, enabling instant data analysis and market forecasting for smarter decision-making.",
    icon: <BarChart className="w-12 h-12 text-green-400" />
  },
  {
    title: "Cloud Data Architecture for Healthcare Provider",
    description: "Designed a cloud-native solution for a healthcare organization, improving patient data accessibility and compliance with healthcare regulations.",
    icon: <Network className="w-12 h-12 text-green-400" />
  }
];

function ServiceCard({ icon, title, point1 , point2 , point3, image, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          rotateX: 45,
          z: -100,
          transformPerspective: 1000
        },
        {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          rotateX: 0,
          z: 0,
          duration: 1.2,
          delay: index * 0.3,
          ease: "power3.out"
        }
      );

      gsap.fromTo(imageRef.current,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          scale: 1.2
        },
        {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.5,
          delay: index * 0.2,
          ease: "power2.inOut"
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className="relative group perspective-1000">
      <div className="glass-card rounded-xl p-6 transform-gpu transition-all duration-500 hover:translate-z-10 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            {icon}
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
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
          <p className="text-green-100/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point1}
          </p>
          <p className="text-green-100/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point2}
          </p>
          {
            point3 ? (
              <p className="text-green-100/80 transform transition-all duration-500 group-hover:translate-x-2">
          • {point3}
          </p>
            ):(
              <p></p>
            )
          }
          
        </div>
      </div>
    </div>
  );
}

function WhyChooseCard({ icon, title, description, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotateY: 90
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
        rotateY: 0,
        duration: 1.2,
        delay: index * 0.3,
        ease: "back.out(1.7)"
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="glass-card rounded-xl p-8 transform-gpu transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-2xl font-bold my-4 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-green-100/80">{description}</p>
      </div>
    </div>
  );
}


export default function DataEngineering() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const bgRef = useRef(null);

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
            <Database className="w-24 h-24 mx-auto text-green-400 opacity-80" />
          </div>
          <h1 className="text-5xl md:text-7xl mb-10 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
            Advanced Data Engineering Services
          </h1>
          <br/>
          <h2 className="text-4xl md:text-5xl mb-10 font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
             Building the Foundation for Data Excellence
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-green-100/90">
          At CloudRaize, we provide state-of-the-art data engineering
services to establish robust and scalable data infrastructures. Our solutions
ensure seamless data integration, management, and accessibility for
businesses to thrive in a data-centric world.
          </p>
          <Link 
            to="#services"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${require('../images/dataeng/back.jpg')})` }} ></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl  font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
           Our Comprehensive Data Engineering Service Offerings:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="relative py-24">
      <div className="absolute inset-0  opacity-5 transform rotate-180 " style={{ backgroundImage: `url(${require('../images/dataeng/back.jpg')})` }}></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
            Why Choose Us?
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
            Ready to Transform Your Data Infrastructure?
          </h2>
          <p className="text-xl mb-10 text-green-200/80">
            Contact us today to explore how our data engineering solutions can empower your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-[#020617]">
        <div className="container mx-auto px-4 text-center text-green-200/60">
          <p>&copy; {new Date().getFullYear()} CloudRaize. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}