import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Platforms', path: '/platforms' },
    { name: 'Why CloudRaize', path: '/why-cloudraize' },
    { name: 'Resources', path: '/resources' },
    { name: 'Partners', path: '/partners' },
    { name: 'Get Demo', path: '/get-demo' },
  ];

  const solutionsDropdown = [
    { name: 'Overview', path: '/solutions/overview' },
    { name: 'DevOps', path: '/solutions/devops' },
    { name: 'Cloud', path: '/solutions/cloud' },
    { name: 'Data Science', path: '/solutions/data-science' },
    { name: 'Data Engineering', path: '/solutions/data-engineering' },
    { name: 'Generative AI', path: '/solutions/generative-ai' },
    
  ];

  return (
    <nav className="fixed w-full bg-blue/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-stretch">
              <Cloud className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">CloudRaize</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {/* Solutions with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2">
                  {solutionsDropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Solutions Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Solutions
              <ChevronDown className={`ml-2 h-4 w-4 transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="mt-2 space-y-1 pl-4">
                {solutionsDropdown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Navigation Items */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { Cloud, Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const navItems = [
//     'Solutions',
//     'Platforms',
//     'Why CloudRaize',
//     'Resources',
//     'Partners',
//     'Get Demo'
//   ];

//   return (
//     <nav className="fixed w-full bg-blue/90 backdrop-blur-sm z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex items-stretch">
//               <Cloud className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">CloudRaize</span>
//             </div>
//           </div>
          
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="nav-item text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }