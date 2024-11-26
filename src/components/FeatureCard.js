import React from 'react';


export default function FeatureCard({ title, description }) {
  return (
    <div className="feature-card glass-card p-8 rounded-xl transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
      <h3 className="text-2xl font-bold mb-4 text-blue-200">{title}</h3>
      <p className="text-blue-200/80">{description}</p>
    </div>
  );
}