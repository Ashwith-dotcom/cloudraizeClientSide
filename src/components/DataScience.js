import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart, Brain, Database } from 'lucide-react';

export default function DataScience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.data-item', {
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
          src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80"
          alt="Data Science Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 to-black/90" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="data-item">
              <h2 className="text-4xl font-bold text-white mb-6">
                Data Science & Engineering
              </h2>
              <p className="text-xl text-gray-300">
                Transform your data into actionable insights with our comprehensive data science and engineering solutions.
              </p>
            </div>
            <div className="data-item">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Data Analytics"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="data-item bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <Database className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Data Architecture</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Leverage leading technologies like Snowflake and Redshift
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Optimize storage for massive datasets
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Design efficient ETL and ELT pipelines
                </li>
              </ul>
            </div>

            <div className="data-item bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <Brain className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Analytics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Machine learning model development
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Predictive analytics solutions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Real-time data processing
                </li>
              </ul>
            </div>
          </div>

          <div className="data-item mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <BarChart className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Data Visualization</h3>
                <p className="text-gray-300">
                  Transform complex data into intuitive dashboards using tools like Tableau, Power BI, and Python Dash. Make your data tell a compelling story that drives decision-making.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Data Visualization"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}