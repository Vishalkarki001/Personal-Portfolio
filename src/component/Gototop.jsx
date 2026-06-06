import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function Gototop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-glow transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}

export default Gototop;
