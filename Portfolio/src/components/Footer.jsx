import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-12">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/hammad-ali-arshad/"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/HammadAliArs"
            className="hover:text-blue-700 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Footer Links / Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">About</h3>
            <p className="text-gray-400 text-sm">
              I'm a passionate developer creating accessible and modern web
              experiences.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: hammadaly.dev@gmail.com
            </p>
            <p className="text-gray-400 text-sm">Phone: +92 309 8683903</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Services</h3>
            <p className="text-gray-400 text-sm">Web Development</p>
            <p className="text-gray-400 text-sm">UI/UX Design</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; 2024 Engineer Hammad Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
