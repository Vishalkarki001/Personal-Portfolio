import { FaLinkedin, FaInstagram, FaXTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { ReactTyped } from "react-typed";
import Reveal from "./Reveal";
import profilePic from "../assets/pic.jpeg";

// 👉 Apna WhatsApp number daalo (country code ke saath, bina + ya space ke). e.g. 9198XXXXXXXX
const WHATSAPP_NUMBER = "916397735548";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Vishalkarki001", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vishal-karki-3393b22b3/", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_vishal_karki/", label: "Instagram" },
  { icon: <FaWhatsapp />, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
  { icon: <FaXTwitter />, href: "https://x.com/", label: "X" },
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16"
    >
      {/* Dot grid + Glow blobs */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="glow-blob animate-glow bg-orange-500/30 dark:bg-orange-500/25 w-[420px] h-[420px] -top-20 -left-20" />
      <div className="glow-blob animate-glow bg-amber-400/20 dark:bg-orange-600/20 w-[380px] h-[380px] top-40 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <Reveal className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I&apos;m <span className="text-gradient">Vishal Karki</span>
            </h1>

            <div className="mt-4 text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 flex items-center justify-center md:justify-start gap-2">
              <span>A</span>
              <ReactTyped
                className="text-orange-500"
                strings={["Web Developer", "React Developer", "Programmer", "Problem Solver"]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0">
              I build modern, fast and visually stunning web experiences. Passionate
              about clean UI, smooth interactions and writing code that lasts.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="/Vishal_Karki_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-glow transition-all hover:-translate-y-0.5"
              >
                Download CV <FiDownload />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-white/15 text-slate-800 dark:text-white font-semibold hover:border-orange-400 hover:text-orange-500 transition-all hover:-translate-y-0.5"
              >
                Contact Me <FiArrowRight />
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-11 h-11 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-lg hover:text-orange-500 hover:border-orange-400 hover:-translate-y-1 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right - Image */}
          <Reveal delay={120} className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* soft gradient glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 blur-3xl opacity-30 animate-glow" />

              {/* rotating dashed ring */}
              <div className="absolute -inset-5 rounded-full border-2 border-dashed border-orange-400/40 animate-spin-slow" />

              <div className="relative animate-float">
                <div className="p-1.5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400">
                  <img
                    src={profilePic}
                    alt="Vishal Karki"
                    className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-white dark:border-black"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
