import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Back to top"
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        items-center
        justify-center
        w-10
        h-10
        rounded-full
        border
        border-[#A67C52]/30
        bg-black/70
        backdrop-blur-md
        text-[#D6B48A]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#A67C52]
        hover:shadow-[0_0_20px_rgba(166,124,82,0.35)]
      "
    >
      ⌃
    </button>
  );
}
