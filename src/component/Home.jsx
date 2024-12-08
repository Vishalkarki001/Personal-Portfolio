import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitter, FaGithub } from "react-icons/fa";
import ReactTyped from "react-typed";
import Gototop from "./Gototop";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl container mx-auto px-6 md:px-20 py-20">
        {/* Main Flex Container */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              Hi, I'm <span className="text-orange-500">Vishal Karki</span>
            </h1>
            <h2 className="text-2xl font-medium text-gray-600 flex items-center justify-center md:justify-start">
              <span className="mr-2">I'm a</span>
              <ReactTyped
                strings={["Developer", "Programmer"]}
                typeSpeed={50}
                backSpeed={70}
                loop
                className="text-orange-500 font-bold"
              />
            </h2>
            <p className="text-lg text-gray-600">
              Passionate about creating impactful web solutions that blend functionality with aesthetic appeal.
            </p>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-5 text-2xl text-gray-600">
              <NavLink to="https://www.facebook.com/" target="_blank">
                <FaFacebook className="hover:text-orange-500 transition-colors" />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/vishal-karki-3393b22b3/" target="_blank">
                <FaLinkedin className="hover:text-orange-500 transition-colors" />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsettings%2F%3F__coig_login%3D1"
                target="_blank"
              >
                <FaInstagramSquare className="hover:text-orange-500 transition-colors" />
              </NavLink>
              <NavLink
                to="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"
                target="_blank"
              >
                <FaTwitter className="hover:text-orange-500 transition-colors" />
              </NavLink>
              <NavLink to="https://github.com/Vishalkarki001" target="_blank">
                <FaGithub className="hover:text-orange-500 transition-colors" />
              </NavLink>
            </div>
            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a
                href="https://github.com/Vishalkarki001/Personal-Portfolio/blob/main/VISHAL%20KARKI%20Resume.docx?raw=true"
                download
                className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition"
              >
                Download CV
              </a>
              <NavLink
                to="/projects"
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-300 transition"
              >
                View Projects
              </NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://github.com/Vishalkarki001/Personal-Portfolio/blob/main/pic.jpg?raw=true"
              alt="Vishal Karki"
              className="rounded-full border-4 border-orange-500 shadow-lg w-64 md:w-80"
            />
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <Gototop />
    </>
  );
}
