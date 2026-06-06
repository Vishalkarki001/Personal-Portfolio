import { useEffect, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "./useTheme";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  // Add a stronger backdrop once the user scrolls a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section in view
  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const ThemeButton = ({ className = "" }) => (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      aria-label="Toggle theme"
      className={`grid place-items-center rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-orange-400 hover:text-orange-500 hover:border-orange-400/60 hover:rotate-12 transition-all ${className}`}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white hover:scale-105 transition-transform"
        >
          <span className="text-orange-500">P</span>ort
          <span className="text-orange-500">F</span>olio
          <span className="text-orange-500">.</span>
        </a>

        {/* Desktop Navigation — active item gets an orange pill highlight */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === item.id
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400"
              }`}
            >
              {active === item.id && (
                <span className="absolute inset-0 rounded-full bg-orange-500 shadow-glow -z-0" />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
          <ThemeButton className="ml-3 w-10 h-10 text-lg" />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeButton className="w-10 h-10 text-lg" />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid place-items-center w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-800 dark:text-white text-2xl"
          >
            {open ? <IoMdClose /> : <IoIosMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                active === item.id
                  ? "bg-orange-500 text-white"
                  : "text-slate-700 dark:text-slate-200 hover:text-orange-500 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
