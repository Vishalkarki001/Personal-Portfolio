import books from "../assets/books.jpg";
import weather from "../assets/weather.jpg";
import blog from "../assets/blog.jpg";
import portfolio from "../assets/portfolio.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "Books Store",
      description:
        "An online bookstore application where users can register and login, store user data in a database, search books, create/delete books, and login with OTP.",
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS"],
      image: books,
      link: "https://github.com/Vishalkarki001/Books_Store",
    },
    {
      title: "Blog Website",
      description:
        "A blogging platform for creating, editing, and sharing content with a sleek and user-friendly interface.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: blog,
      link: "https://github.com/Vishalkarki001/Notes-making",
    },
    {
      title: "Weather Forecasting",
      description:
        "A real-time weather forecasting app to check weather updates and predictions globally.",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
      image: weather,
      link: "https://github.com/Vishalkarki001/Weather-forecasting-website",
    },
    {
      title: "Personal Portfolio",
      description:
        "A portfolio website to showcase projects, skills, and achievements with a modern design.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: portfolio,
      link: "https://github.com/Vishalkarki001/Personal-Portfolio",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-6 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-10">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />
              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Technologies:
                  </h3>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <li
                        key={idx}
                        className="text-sm bg-orange-100 dark:bg-orange-200/20 text-orange-700 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
