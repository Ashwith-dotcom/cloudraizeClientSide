import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Cloud, Server, Database, Code, Shield, Users } from 'lucide-react';
import HeroVideo from "../images/cloud/hero.mp4"
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Cloud className="w-12 h-12 text-cyan-400" />,
    title: "Cloud Strategy and Consulting",
    point1: "Assess your current infrastructure and define a robust cloud adoption strategy.",
    point2: "Design tailored solutions to meet your business goals and industry requirements.",
    point3: "Ensure risk-free cloud migration with thorough planning and implementation.",
    image: "https://cdn-bbaid.nitrocdn.com/wYFmIWkSNKpdInpiRfVoEqTErZtkFjBo/assets/images/optimized/rev-4de3647/www.rishabhsoft.com/wp-content/uploads/2023/02/Blog-Banner_New_Cloud-Consulting.jpg"
  },
  {
    icon: <Server className="w-12 h-12 text-cyan-400" />,
    title: "Cloud Migration Services",
    point1: "Execute seamless migrations from on-premises to cloud environments.",
    point2: "Support lift-and-shift, replatforming, and rearchitecting approaches.",
    point3: "Minimize downtime with robust data migration strategies.",
    image: "https://gdcitsolutions.com/wp-content/uploads/Cloud-Migration-Services.jpg"
  },
  {
    icon: <Database className="w-12 h-12 text-cyan-400" />,
    title: "Multi-Cloud and Hybrid Cloud Solutions",
    point1: "Optimize workloads across AWS, Azure, and Google Cloud platforms.",
    point2: "Implement secure and scalable hybrid-cloud solutions for flexibility.",
    point3: "Enable seamless integrations and workload portability.",
    image: "https://www.weka.io/wp-content/uploads/files/2022/08/unnamed-1img.jpg"
  },
  {
    icon: <Code className="w-12 h-12 text-cyan-400" />,
    title: "Infrastructure as a Service (IaaS)",
    point1: "Deploy virtualized compute, storage, and network resources.",
    point2: "Leverage on-demand scalability for dynamic workloads.",
    point3: "Reduce capital expenses with pay-as-you-go pricing models.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDfTQj5KRVxSomH_Bk5hWCu-ha2SoArEUfQ&s"
  },
  {
    icon: <Code className="w-12 h-12 text-cyan-400" />,
    title: "Platform as a Service (PaaS)",
    point1: "Accelerate development with managed platforms for applications.",
    point2: "Integrate development tools, databases, and runtime environments.",
    point3: "Focus on innovation while we manage the underlying infrastructure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDfTQj5KRVxSomH_Bk5hWCu-ha2SoArEUfQ&s"
  },
  {
    icon: <Shield className="w-12 h-12 text-cyan-400" />,
    title: "Serverless Computing",
    point1: "Enable event-driven applications with serverless architectures.",
    point2: "Reduce operational complexity and improve agility.",
    point3: "Utilize services like AWS Lambda, Azure Functions, and Google Cloud Functions.",
    image: "https://agilevision.io/_astro/24.llX8Krgd_Z1t8PTu.webp"
  },
  
  {
    icon: <Shield className="w-12 h-12 text-cyan-400" />,
    title: "Cloud Security and Compliance",
    point1: "Enable event-driven applications with serverless architectures.",
    point2: "Reduce operational complexity and improve agility.",
    point3: "Utilize services like AWS Lambda, Azure Functions, and Google Cloud Functions.",
    image: "https://agilevision.io/_astro/24.llX8Krgd_Z1t8PTu.webp"
  },
  {
    icon: <Shield className="w-12 h-12 text-cyan-400" />,
    title: "Cloud Cost Optimization",
    point1: "Enable event-driven applications with serverless architectures.",
    point2: "Reduce operational complexity and improve agility.",
    point3: "Utilize services like AWS Lambda, Azure Functions, and Google Cloud Functions.",
    image: "https://agilevision.io/_astro/24.llX8Krgd_Z1t8PTu.webp"
  },
  {
    icon: <Shield className="w-12 h-12 text-cyan-400" />,
    title: "Backup and Disaster Recovery",
    point1: "Enable event-driven applications with serverless architectures.",
    point2: "Reduce operational complexity and improve agility.",
    point3: "Utilize services like AWS Lambda, Azure Functions, and Google Cloud Functions.",
    image: "https://agilevision.io/_astro/24.llX8Krgd_Z1t8PTu.webp"
  },
  {
    icon: <Users className="w-12 h-12 text-cyan-400" />,
    title: "Cloud-Native Development",
    point1: "Build applications designed specifically for cloud environments.",
    point2: "Utilize microservices architecture and containerization.",
    point3: "Leverage Kubernetes, Docker, and service meshes like Istio.",
    image: "https://www.akana.com/sites/default/files/image/2021-05/image-blog-improve-cloud-applications.jpg"
  },
  {
    icon: <Users className="w-12 h-12 text-cyan-400" />,
    title: "Big Data and Analytics",
    point1: "Process and analyze large-scale data with cloud-native tools.",
    point2: "Implement data lakes and real-time analytics platforms.",
    point3: "Leverage tools like AWS Redshift, Azure Synapse, and Google BigQuery.",
    image: "https://www.akana.com/sites/default/files/image/2021-05/image-blog-improve-cloud-applications.jpg"
  },
  {
    icon: <Users className="w-12 h-12 text-cyan-400" />,
    title: "AI and Machine Learning in the Cloud",
    point1: "Train, deploy, and manage ML models with cloud AI services",
    point2: "Leverage AWS SageMaker, Azure AI, and Google AI tools.",
    point3: "Integrate AI-driven insights into your business processes.",
    image: "https://www.akana.com/sites/default/files/image/2021-05/image-blog-improve-cloud-applications.jpg"
  },
  {
    icon: <Users className="w-12 h-12 text-cyan-400" />,
    title: "IoT Solutions",
    point1: "Connect and manage IoT devices with cloud-based platforms",
    point2: "Process real-time data streams with edge and cloud integration.",
    point3: "Use services like AWS IoT, Azure IoT Hub, and Google Cloud IoT Core.",
    image: "https://www.akana.com/sites/default/files/image/2021-05/image-blog-improve-cloud-applications.jpg"
  },
  {
    icon: <Users className="w-12 h-12 text-cyan-400" />,
    title: "Monitoring and Observability",
    point1: "Implement comprehensive monitoring solutions for cloud resources.",
    point2: "Use tools like CloudWatch, Azure Monitor, and Stackdriver.",
    point3: "Enable proactive issue detection and resolution.",
    image: "https://www.akana.com/sites/default/files/image/2021-05/image-blog-improve-cloud-applications.jpg"
  },

];
function ServiceCard({ icon, title, point1 , point2 , point3, image , index}) {
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
    <div ref={cardRef} className="relative group rounded-xl p-6 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
      <div className="glass-card relative h-48 mb-6 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b1f] via-[#050b1f]/60 to-transparent"></div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-blue-200">{title}</h3>
      </div>
      <p className="text-blue-200/80">• {point1}</p><br/>
      <p className="text-blue-200/80">• {point2}</p><br/>
      <p className="text-blue-200/80">• {point3}</p>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="feature-card glass-card p-8 rounded-xl transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
      <h3 className="text-2xl font-bold mb-4 text-blue-200">{title}</h3>
      <p className="text-blue-200/80">{description}</p>
    </div>
  );
}



const features = [
  {
    title: "Expert Team",
    description: "Certified cloud professionals with years of experience"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and technical assistance"
  },
  {
    title: "Cost Effective",
    description: "Optimized solutions to maximize your ROI"
  }
];

export default function CloudServices() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
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
            <Cloud className="w-24 h-24 mx-auto text-cyan-400 opacity-80" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Cloud Services
          </h1>
          <br/>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 px-4 py-2 ">
          Empowering Businesses with Next-Gen Cloud Solutions
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-200/90">
          At CloudRaize, we offer comprehensive cloud services designed to
empower your business
with the scalability, flexibility, and efficiency required in today's digital-first
world.
Our advanced cloud solutions encompass a wide range of services to optimize,
secure, and innovate
your IT infrastructure, enabling seamless transformation and operational
excellence.

          </p>
          <Link 
            to="#services"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="relative py-24">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${require('../images/cloud/back.jpg')})` }}></div>
        <div className="container mx-auto px-4 relative">
           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Comprehensive Cloud Service Offerings
              </h2>
            
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} index={index} />
                ))}
              </div>
            
         
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="why-choose" className="relative py-24">
        <div className="absolute inset-0 opacity-5 transform rotate-180 "style={{ backgroundImage: `url(${require('../images/cloud/back.jpg')})` }}></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Why Choose CloudRaize
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b1f]/80 to-[#050b1f]"></div>
        <div className="contact-content container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 text-blue-200/80">Let's discuss how our cloud solutions can drive your success</p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-[#030712]">
        <div className="container mx-auto px-4 text-center text-blue-200/60">
          <p>&copy; {new Date().getFullYear()} CloudRaize. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}