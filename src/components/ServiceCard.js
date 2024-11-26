import React from 'react';


export default function ServiceCard({ icon, title, point1 , point2 , point3, image }) {
  return (
    <div className="service-box glass-card rounded-xl p-6 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
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
      <p className="text-blue-200/80">{point1}</p>
      <p className="text-blue-200/80">{point2}</p>
      <p className="text-blue-200/80">{point3}</p>
    </div>
  );
}