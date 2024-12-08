import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitter, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-20">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800  decoration-orange-500 decoration-4 text-center mb-6">
          About Me
        </h1>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="md:w-1/2 text-center">
            <img
              src="https://github.com/Vishalkarki001/Personal-Portfolio/blob/main/pic.jpg?raw=true"
              alt="Vishal's Profile"
              className="mx-auto  rounded-2xl shadow-lg w-[300px] md:w-[350px]"
            />
          </div>

          {/* About Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-xl leading-relaxed text-gray-700 font-medium">
              Hello, I'm <span className="font-semibold text-orange-500">Vishal</span>, a passionate Web Developer. 
              I strive to create impactful and visually stunning software solutions that leave a lasting impression.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">Education</h2>
          <p className="text-lg text-gray-800 text-center">
            <span className="font-medium">Dev Bhoomi Uttarakhand University, Dehradun</span><br />
            Bachelor of Computer Application (BCA) <br /> <span className="text-gray-500">2022-2025</span>
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">Skills</h2>
          <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-700">
            <li className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200">HTML</li>
            <li className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200">CSS</li>
            <li className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200">Tailwind CSS</li>
            <li className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200">JavaScript</li>
            <li className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200">React</li>
            <li className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200">Node.js</li>
            <li className="bg-orange-100 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200">MongoDB</li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">Connect with Me</h2>
          <div className="flex justify-center space-x-6 text-3xl text-gray-600">
            <NavLink to="https://www.facebook.com/" target="_blank" className="hover:text-orange-500">
              <FaFacebook />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/vishal-karki-3393b22b3/" target="_blank" className="hover:text-orange-500">
              <FaLinkedin />
            </NavLink>
            <NavLink to="https://www.instagram.com/" target="_blank" className="hover:text-orange-500">
              <FaInstagramSquare />
            </NavLink>
            <NavLink to="https://twitter.com/" target="_blank" className="hover:text-orange-500">
              <FaTwitter />
            </NavLink>
            <NavLink to="https://github.com/Vishalkarki001" target="_blank" className="hover:text-orange-500">
              <FaGithub />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
