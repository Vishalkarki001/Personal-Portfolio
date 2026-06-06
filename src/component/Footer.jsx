import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

// 👉 Apna WhatsApp number daalo (country code ke saath, bina + ya space ke). e.g. 9198XXXXXXXX
const WHATSAPP_NUMBER = "916397735548";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Vishalkarki001", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vishal-karki-3393b22b3/", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_vishal_karki/", label: "Instagram" },
  { icon: <FaWhatsapp />, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
  { icon: <FaXTwitter />, href: "https://x.com/", label: "X" },
];

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-extrabold text-slate-900 dark:text-white">
              <span className="text-orange-500">P</span>ort
              <span className="text-orange-500">F</span>olio
              <span className="text-orange-500">.</span>
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Building modern, fast and beautiful web experiences.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid place-items-center w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-400 hover:-translate-y-1 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 text-center text-sm text-slate-500 dark:text-slate-400">
          © {year} Vishal Karki. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
