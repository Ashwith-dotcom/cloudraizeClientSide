import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DataEngineering = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const testimonialsRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(heroRef.current, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: heroRef.current,
  //       start: "top 80%",
  //     },
  //   });

  //   gsap.from(servicesRef.current.children, {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.2,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: servicesRef.current,
  //       start: "top 80%",
  //     },
  //   });

  //   gsap.from(whyChooseRef.current.children, {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.2,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: whyChooseRef.current,
  //       start: "top 80%",
  //     },
  //   });

  //   gsap.from(caseStudiesRef.current.children, {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.2,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: caseStudiesRef.current,
  //       start: "top 80%",
  //     },
  //   });

  //   gsap.from(testimonialsRef.current.children, {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.2,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: testimonialsRef.current,
  //       start: "top 80%",
  //     },
  //   });
  // }, []);

  return (
    <div className="bg-[#050b1f] text-gray-100 min-h-screen">
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/data-engineering-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Data Engineering Services to Empower Your Business</h1>
          <p className="text-xl">Transform your data into actionable insights with expert data engineering solutions designed for scalability, security, and performance.</p>
        </div>
      </section>

      <section id="data-engineering" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Data Engineering Service Offerings</h2>
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="./Data_engg_images/Screenshot from 2024-11-22 10-04-11.png" alt="Data Infrastructure Setup" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Data Infrastructure Setup</h3>
              <p>We specialize in building scalable data infrastructure using Snowflake, Redshift, and BigQuery to ensure fast, secure, and scalable data storage for your business.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="./Data_engg_images/Screenshot from 2024-11-22 10-07-18.png" alt="Data Pipeline Development" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Data Pipeline Development</h3>
              <p>We create reliable ETL/ELT pipelines and real-time streaming systems powered by Apache Kafka and Flink for efficient data processing and integration.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="./Data_engg_images/Screenshot from 2024-11-22 10-08-22.png" alt="Cloud Data Engineering" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Cloud Data Engineering</h3>
              <p>We design and implement cloud-native data solutions on AWS, Azure, and Google Cloud, ensuring scalable, serverless, and high-performance data operations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="./Data_engg_images/Screenshot from 2024-11-22 10-08-22.png" alt="Data Governance and Security" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Data Governance & Security</h3>
              <p>We offer comprehensive data governance strategies, including encryption protocols, compliance frameworks, and role-based access controls (RBAC) to safeguard your sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose CloudRaize for Data Engineering?</h2>
          <div ref={whyChooseRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Comprehensive Data Engineering Solutions</h3>
              <p>We offer end-to-end data solutions, from cloud-native architectures to big data pipelines, ensuring every aspect of your data engineering is covered.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Expertise in Modern Data Technologies</h3>
              <p>Our team works with the latest data technologies like Snowflake, AWS, Google BigQuery, and Apache Kafka to build robust, scalable data infrastructure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Tailored Data Engineering Solutions</h3>
              <p>We don't believe in one-size-fits-all. Our solutions are customized to meet your unique business needs, ensuring optimal results every time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Data Security and Compliance</h3>
              <p>Security is our priority. We follow best practices for encryption, data privacy, and regulatory compliance, ensuring your data remains secure and compliant.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Success Stories</h2>
          <div ref={caseStudiesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Data Warehouse Solution for Retail Chain</h3>
              <p>We developed a highly scalable data warehouse for a leading retail chain, optimizing inventory management and customer insights across multiple regions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Real-time Analytics Platform for FinTech</h3>
              <p>Our team built a real-time analytics platform for a FinTech startup, enabling instant fraud detection and personalized financial recommendations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">IoT Data Pipeline for Manufacturing</h3>
              <p>We designed and implemented an IoT data pipeline for a manufacturing company, improving operational efficiency and predictive maintenance capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"CloudRaize transformed our data infrastructure, enabling us to make data-driven decisions faster than ever before. Their expertise in cloud technologies and big data processing is unmatched."</p>
              <p className="font-bold">- John Doe, CTO of TechCorp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"The data pipeline CloudRaize built for us has been a game-changer. We've seen a 40% increase in operational efficiency and can now predict maintenance needs with 95% accuracy."</p>
              <p className="font-bold">- Jane Smith, Head of Operations at ManufacturePro</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataEngineering;

