import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import Reveal from "./Reveal";

// color = brand colour. adaptive = logo is black/white, so follow the theme.
const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, adaptive: true },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, adaptive: true },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "AWS", icon: FaAws, adaptive: true },
  { name: "Vercel", icon: SiVercel, adaptive: true },
];

function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm">
            What I work with
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map(({ name, icon: Icon, color, adaptive }, i) => (
            <Reveal key={name} delay={i * 50}>
              <div className="group card-surface rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1.5 hover:border-orange-400/60 hover:shadow-glow transition-all duration-300">
                <Icon
                  className={`text-5xl transition-transform duration-300 group-hover:scale-110 ${
                    adaptive ? "text-slate-900 dark:text-white" : ""
                  }`}
                  style={adaptive ? undefined : { color }}
                />
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
