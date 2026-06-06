import { FiAward, FiCode, FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";
import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { icon: <FiCode />, value: 10, suffix: "+", label: "Projects Built" },
  { icon: <FiBriefcase />, value: 2, suffix: "+", label: "Years Coding" },
  { icon: <FiAward />, value: 15, suffix: "+", label: "Technologies" },
];

function About() {
  return (
    <section id="about" className="relative py-24 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm">
            Get to know me
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Reveal className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-amber-400/20 blur-2xl" />
              <img
                src="https://github.com/Vishalkarki001/Personal-Portfolio/blob/main/IMG_20240815_104334_914.jpg?raw=true"
                alt="Vishal Karki"
                className="relative w-[300px] md:w-[360px] rounded-3xl object-cover shadow-xl border border-slate-200 dark:border-white/10"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              I&apos;m <span className="text-orange-500">Vishal</span>, a passionate Web Developer.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I love turning ideas into impactful, visually stunning software. From
              pixel-perfect interfaces to robust backends, I focus on building products
              that feel fast, look modern and leave a lasting impression.
            </p>

            {/* Education card */}
            <div className="mt-8 card-surface rounded-2xl p-6 flex gap-4 items-start">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 text-xl shrink-0">
                <FaGraduationCap />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Bachelor of Computer Application (BCA)
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Dev Bhoomi Uttarakhand University, Dehradun
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">2022 — 2025</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-surface rounded-2xl p-4 text-center hover:-translate-y-1 transition-transform"
                >
                  <div className="grid place-items-center text-orange-500 text-xl mb-1">
                    {s.icon}
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
