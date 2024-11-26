import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DataScience = () => {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Hero Section Animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    // Sections Animation
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2, // Staggering animations
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);


  const sections = [
    {
      title: "Data Strategy and Consulting",
      items: [
        {
          title: "Custom Strategies",
          description: "Developing bespoke data strategies tailored to align with your business objectives.",
        },
        {
          title: "Workflow Optimization",
          description: "Streamlining data processes for maximum efficiency and impact across the organization.",
        },
      ],
    },
    {
      title: "Data Modeling and Analytics",
      items: [
        {
          title: "Predictive Modeling",
          description: "Forecasting future trends with cutting-edge regression and AI-driven analysis.",
        },
        {
          title: "AI Algorithms",
          description: "Leveraging machine learning to deliver actionable insights and enhance innovation.",
        },
      ],
    },
    {
      title: "Big Data Analytics",
      items: [
        {
          title: "Big Data Tools",
          description: "Utilizing Hadoop and Spark to process vast datasets for hidden patterns.",
        },
        {
          title: "Real-Time Insights",
          description: "Deploying analytics solutions for instant decision-making on the fly.",
        },
      ],
    },
    {
      title: "Business Intelligence",
      items: [
        {
          title: "Interactive Dashboards",
          description: "Creating dynamic dashboards with Power BI and Tableau to visualize data effectively.",
        },
        {
          title: "Self-Service Analytics",
          description: "Empowering stakeholders with easy-to-use data tools for better decision-making.",
        },
      ],
    },
    {
      title: "Natural Language Processing",
      items: [
        {
          title: "Advanced Chatbots",
          description: "Deploying NLP-powered bots for seamless, intuitive customer interactions.",
        },
        {
          title: "Text Summarization",
          description: "Extracting key insights from large unstructured data sets with NLP techniques.",
        },
      ],
    },
    {
      title: "AI-Powered Decision Support",
      items: [
        {
          title: "Recommendation Systems",
          description: "Enhancing user experiences with AI-driven personalized recommendations.",
        },
        {
          title: "Anomaly Detection",
          description: "Identifying potential risks in real-time with intelligent monitoring systems.",
        },
      ],
    },
  ];

  return (
    <div className="bg-blue-500">
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden section-padding"
      >
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Data Science Solutions</h1>
          <p className="text-xl">Unlocking insights and driving innovation through advanced analytics</p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={index} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">{section.title}</h2>
            <div
              ref={el => sectionsRef.current[index] = el}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <img src={`https://via.placeholder.com/400x200?text=${item.title.replace(' ', '+')}`} alt={item.title} className="w-full h-40 object-cover mb-4 rounded" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DataScience;
