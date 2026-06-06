import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import Reveal from "./Reveal";

// 👉 Apna WhatsApp number daalo (country code ke saath, bina + ya space ke). e.g. 9198XXXXXXXX
const WHATSAPP_NUMBER = "916397735548";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Vishalkarki001", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vishal-karki-3393b22b3/", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_vishal_karki/?hl=en", label: "Instagram" },
  { icon: <FaWhatsapp />, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
  { icon: <FaXTwitter />, href: "https://x.com", label: "X" },
];

const inputClass =
  "w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-transparent transition";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/wbrkddza", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm">
            Let&apos;s talk
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: info + map */}
          <Reveal className="flex flex-col gap-6">
            <div className="card-surface rounded-2xl p-6 flex items-center gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 text-xl shrink-0">
                <FiMapPin />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="font-semibold text-slate-900 dark:text-white">Almora, Uttarakhand, India</p>
              </div>
            </div>

            <div className="card-surface rounded-2xl p-6 flex items-center gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 text-xl shrink-0">
                <FiMail />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Connect with me</p>
                <div className="flex gap-3 mt-1 text-xl text-slate-700 dark:text-slate-300">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="hover:text-orange-500 hover:-translate-y-0.5 transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-surface rounded-2xl overflow-hidden flex-1 min-h-[220px]">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27752.589176814716!2d79.63264992389435!3d29.60154526745536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7328910d81f%3A0x9811d25dd87d8ed5!2sAlmora%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1718647245336!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="min-h-[220px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-surface rounded-2xl p-8 h-full flex flex-col"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send me a message
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className={inputClass}
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  className={inputClass}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>

              <div className="mb-6 flex-1 flex flex-col">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className={`${inputClass} resize-none flex-1`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-3 shadow-glow transition-all hover:-translate-y-0.5"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <FiSend />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
