import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Menu, X, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      gsap.from(dropdownRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  }, [dropdownOpen]);

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

  const isActive = (path) => location.pathname === path;

  return (
    <nav ref={navRef} className="fixed w-full z-50 opacity-0 -translate-y-full">
      <div className="absolute inset-0 bg-transparent backdrop-blur-md"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Cloud className="h-8 w-8 text-blue-600 transform group-hover:scale-110 transition-transform duration-200" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CloudRaize
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Solutions with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center px-4 py-2 rounded-md text-sm text-white hover:text-blue-700 hover:bg-transparent transition-all duration-200">
                <span>Solutions</span>
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 mt-1 w-56 bg-transparent rounded-lg shadow-lg py-2"
                >
                  {solutionsDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm ${
                        isActive(item.path)
                          ? 'text-blue-600 bg-transparent'
                          : 'text-white hover:text-blue-700 hover:bg-transparent'
                      } transition-colors duration-150`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-transparent'
                    : 'text-white hover:text-blue-700 hover:bg-transparent'
                } transition-all duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-blue-300 hover:bg-transparent transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-transparent border-b border-gray-100 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {/* Solutions Dropdown Mobile */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-white hover:text-blue-300 hover:bg-transparent rounded-md transition-colors duration-200"
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="pl-4 space-y-1">
                  {solutionsDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm rounded-md ${
                        isActive(item.path)
                          ? 'text-blue-600 bg-transparent'
                          : 'text-white hover:text-blue-300 hover:bg-transparent'
                      } transition-colors duration-150`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Items Mobile */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-transparent'
                    : 'text-white hover:text-blue-300 hover:bg-transparent'
                } transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Cloud, Menu, X, ChevronDown } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const navItems = [
//     { name: 'Platforms', path: '/platforms' },
//     { name: 'Why CloudRaize', path: '/why-cloudraize' },
//     { name: 'Resources', path: '/resources' },
//     { name: 'Partners', path: '/partners' },
//     { name: 'Get Demo', path: '/get-demo' },
//   ];

//   const solutionsDropdown = [
//     { name: 'Overview', path: '/solutions/overview' },
//     { name: 'DevOps', path: '/solutions/devops' },
//     { name: 'Cloud', path: '/solutions/cloud' },
//     { name: 'Data Science', path: '/solutions/data-science' },
//     { name: 'Data Engineering', path: '/solutions/data-engineering' },
//     { name: 'Generative AI', path: '/solutions/generative-ai' },
    
//   ];

//   return (
//     <nav className="fixed w-full bg-blue/90 backdrop-blur-sm z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex items-stretch">
//               <Cloud className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">CloudRaize</span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-4">
//             {/* Solutions with Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setDropdownOpen(true)}
//               onMouseLeave={() => setDropdownOpen(false)}
//             >
//               <button className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 Solutions
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2">
//                   {solutionsDropdown.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={item.path}
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 text-sm"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Other Navigation Items */}
//             {navItems.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
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

//       {/* Mobile Menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {/* Solutions Dropdown */}
//           <div>
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//             >
//               Solutions
//               <ChevronDown className={`ml-2 h-4 w-4 transform ${dropdownOpen ? 'rotate-180' : ''}`} />
//             </button>
//             {dropdownOpen && (
//               <div className="mt-2 space-y-1 pl-4">
//                 {solutionsDropdown.map((item, index) => (
//                   <Link
//                     key={index}
//                     to={item.path}
//                     className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Other Navigation Items */}
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
