import React from "react";
import css from "../assets/css.jpg";
import html from "../assets/html.jpg";
import java from "../assets/java.jpg";
import tailwindcss from "../assets/tailwindcss.jpg";
import mongodb from "../assets/mongodb.jpg";
import react from "../assets/react.jpg";
import js from "../assets/js.jpg";
import nodejs from "../assets/nodejs.jpg";

function Skills() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: js, name: "JavaScript" },
    { id: 4, logo: react, name: "React" },
    { id: 5, logo: mongodb, name: "MongoDB" },
    { id: 6, logo: tailwindcss, name: "Tailwind CSS" },
    { id: 7, logo: java, name: "Java" },
    { id: 8, logo: nodejs, name: "Node.js" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 my-16">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 md:w-28 md:h-28">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-full h-full object-contain rounded-full mix-blend-multiply"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />
    </>
  );
}

export default Skills;
