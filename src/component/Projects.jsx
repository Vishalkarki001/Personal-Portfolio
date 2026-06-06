import { FiGithub, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import books from "../assets/books.jpg";
import weather from "../assets/weather.jpg";
import blog from "../assets/blog.jpg";
import portfolio from "../assets/portfolio.jpg";
import agrogrow from "../assets/agrow.png";
import agrogreenvibe from "../assets/agrovibe.png";
import jarvis from "../assets/jarvis.png";
import Reveal from "./Reveal";

const projectList = [
  {
    title: "JARVIS RCSA",
    description:
      "An enterprise-grade Risk & Control Self-Assessment (RCSA) platform for financial institutions. Worked with a team to build AI-powered document analysis and automated, audit-ready compliance reports using the Claude API.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Claude AI"],
    // 👉 Apni screenshot ko src/assets/jarvis.png ke naam se save karo
    image: jarvis,
    link: "https://github.com/thestemmlergroup/jarvis_rcsa",
    live: "https://jarvis-rcsa.up.railway.app",
  },
  {
    title: "AgroGrow",
    description:
      "India's trusted agriculture portal — modern farming techniques, government schemes, live mandi prices and weather updates, all in one place to help farmers grow smart and earn big.",
    technologies: ["React", "Tailwind", "API", "Vercel"],
    image: agrogrow,
    link: "https://github.com/Vishalkarki001/agrogrow",
    live: "https://agrogrow.vercel.app/",
  },
  {
    title: "Agro Greenvibe",
    description:
      "A professional landscaping company website — design, build and maintain beautiful green spaces: landscaping, terrace gardens, parks and ponds, with service showcase and quote requests.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    image: agrogreenvibe,
    link: "https://github.com/Vishalkarki001/agrogreenvibe",
    live: "https://www.agrogreenvibeindia.com/",
  },
  {
    title: "Books Store",
    description:
      "A full-stack online bookstore — user auth with OTP login, search, and full CRUD for books, all backed by a database.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: books,
    link: "https://github.com/Vishalkarki001/Books_Store",
  },
  {
    title: "Blog Website",
    description:
      "A clean blogging platform for creating, editing and sharing content with a sleek, user-friendly interface.",
    technologies: ["React", "JavaScript", "Tailwind"],
    image: blog,
    link: "https://github.com/Vishalkarki001/Notes-making",
  },
  {
    title: "Weather Forecasting",
    description:
      "A real-time weather app to check live updates and forecasts for any city across the globe.",
    technologies: ["React", "OpenWeather API", "Tailwind"],
    image: weather,
    link: "https://github.com/Vishalkarki001/Weather-forecasting-website",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio to showcase projects, skills and achievements with light/dark mode and smooth animations.",
    technologies: ["React", "JavaScript", "Tailwind"],
    image: portfolio,
    link: "https://github.com/Vishalkarki001/Personal-Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm">
            Recent work
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <article className="group card-surface rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-orange-400/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a
                    href={project.live || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-white/90 dark:bg-black/70 text-slate-800 dark:text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all hover:text-orange-500"
                  >
                    <FiArrowUpRight />
                  </a>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white hover:text-orange-500 transition-colors"
                    >
                      <FiGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
