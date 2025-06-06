"use client";

import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out z-50 
                  ${isVisible ? "opacity-100 bg-[var(--color-blue-dark)] text-white hover:bg-opacity-80" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
      style={{borderRadius: "9999px"}} // Ensure it's a circle
    >
      <ArrowUpCircle size={28} />
    </button>
  );
};

export default BackToTopButton;

