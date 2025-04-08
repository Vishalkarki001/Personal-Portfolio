function About() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 py-10 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto px-6 md:px-20">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white decoration-orange-500 decoration-4 text-center mb-6">
            About Me
          </h1>

          {/* Intro Section */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image */}
            <div className="md:w-1/2 text-center">
              <img
               src="https://github.com/Vishalkarki001/Personal-Portfolio/blob/main/IMG_20240815_104334_914.jpg?raw=true"
                alt="Vishal's Profile"
                className="mx-auto rounded-2xl shadow-lg w-[300px] md:w-[350px]"
              />
            </div>

            {/* About Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                Hello, I`m{" "}
                <span className="font-semibold text-orange-500">Vishal</span>, a
                passionate Web Developer. I strive to create impactful and
                visually stunning software solutions that leave a lasting
                impression.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">
              Education
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-300 text-center">
              <span className="font-medium">
                Dev Bhoomi Uttarakhand University, Dehradun
              </span>
              <br />
              Bachelor of Computer Application (BCA) <br />{" "}
              <span className="text-gray-500 dark:text-gray-400">2022-2025</span>
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">
              Skills
            </h2>
            <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-200">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Node.js", "MongoDB"].map((skill, index) => (
                <li
                  key={index}
                  className="bg-orange-100 dark:bg-orange-200/20 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-200 dark:hover:bg-orange-300/20"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br />
      <hr className="border-gray-300 dark:border-gray-600" />
    </>
  );
}

export default About;
