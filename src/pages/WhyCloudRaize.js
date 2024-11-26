import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyCloudRaize = () => {
  const heroRef = useRef(null);
  const reasonsRef = useRef(null);
  const teamRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
      },
    });

    gsap.from(reasonsRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: reasonsRef.current,
        start: "top 80%",
      },
    });

    gsap.from(teamRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 80%",
      },
    });

    gsap.from(contactFormRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: contactFormRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="bg-gray-100">
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
          <source src="/videos/why-cloudraize-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Why Choose CloudRaize?</h1>
          <p className="text-xl">Discover the CloudRaize advantage and how we can transform your business</p>
        </div>
      </section>

      <section id="reasons" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Reasons to Choose CloudRaize</h2>
          <div ref={reasonsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Expertise Across Domains</h3>
              <p>Our team of experts spans multiple domains including cloud services, data science, and AI, ensuring comprehensive solutions for your business needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
              <p>We stay at the forefront of technological advancements, implementing the latest tools and methodologies to give your business a competitive edge.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
              <p>We understand that every business is unique. Our solutions are custom-designed to address your specific challenges and goals.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Scalability</h3>
              <p>Our solutions are built to grow with your business, ensuring long-term value and adaptability to changing market conditions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p>With a history of successful projects across various industries, we have the experience to deliver results that matter.</p>
            
</div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p>Our commitment to your success extends beyond project completion with ongoing support and maintenance services.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Expert Team</h2>
          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/team/john-doe.jpg" alt="John Doe" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/team/jane-smith.jpg" alt="Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Head of Data Science</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/team/mike-johnson.jpg" alt="Mike Johnson" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
              <p className="text-gray-600">Lead Cloud Architect</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Ready to Get Started?</h2>
          <div ref={contactFormRef} className="max-w-lg mx-auto">
            <form className="bg-gray-100 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                <input type="text" id="company" name="company" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCloudRaize;

