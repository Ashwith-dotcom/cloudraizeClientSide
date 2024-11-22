import React from 'react';
import { Cloud, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Cloud className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">CloudRaize</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering businesses with future-ready cloud solutions and innovative technology services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Cloud Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">DevOps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Data Science</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Generative AI</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Partners</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CloudRaize. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}