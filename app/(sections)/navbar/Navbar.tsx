"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LuxuryNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const heroBgRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- scroll behavior ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!navbarRef.current || isMenuOpen) return;

      if (window.scrollY > 50) {
        navbarRef.current.classList.add(
          // glass effect
          "bg-black/20",
          "backdrop-blur-xl",
          "backdrop-saturate-150",

          // separation
          "border-white/10",
          "shadow-[0_10px_40px_rgba(0,0,0,0.15)]",

          // size
          "py-4"
        );

        navbarRef.current.classList.remove(
          "py-6",
          "border-white/0",
          "bg-white",
          "backdrop-blur-none"
        );
      } else {
        navbarRef.current.classList.remove(
          "bg-black/20",
          "backdrop-blur-xl",
          "backdrop-saturate-150",
          "border-white/10",
          "shadow-[0_10px_40px_rgba(0,0,0,0.15)]",
          "py-4"
        );

        navbarRef.current.classList.add(
          "py-6",
          "border-white/0"
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  /* ---------------- menu open / close navbar override ---------------- */
  useEffect(() => {
    if (!navbarRef.current) return;

    if (isMenuOpen) {
      navbarRef.current.classList.remove(
        "bg-black/20",
        "backdrop-blur-xl",
        "backdrop-saturate-150",
        "border-white/10",
        "shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
      );

      navbarRef.current.classList.add(
        "bg-white",
        "border-neutral-200",
        "shadow-sm"
      );
    } else {
      navbarRef.current.classList.remove(
        "bg-white",
        "border-neutral-200",
        "shadow-sm"
      );
    }
  }, [isMenuOpen]);

  /* ---------------- parallax ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!heroBgRef.current) return;
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBgRef.current.style.transform = `translateY(${y * 0.4}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 z-50 w-full py-6 transition-all duration-500 border-b border-white/0"
      >
        <div className="flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Link
            href="/"
            className={`relative z-50 ${
              isMenuOpen
                ? "text-neutral-900"
                : "text-white mix-blend-difference"
            }`}
          >
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-medium tracking-tighter">
                ZAPTURE
              </span>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => {
              setIsMenuOpen((v) => !v);
              document.body.style.overflow = !isMenuOpen ? "hidden" : "";
            }}
            className={`relative z-50 flex items-center gap-2 cursor-pointer
                        transition-colors ${
                          isMenuOpen
                            ? "text-neutral-900"
                            : "text-white mix-blend-difference"
                        }`}
          >
            <span className="text-sm font-medium tracking-widest uppercase transition-all duration-300">
              {isMenuOpen ? "Close" : "Menu"}
            </span>

            <div className="relative w-6 h-4">
              <span
                className={`absolute w-full h-[1.5px] bg-current
                            transition-all duration-300
                            ease-[cubic-bezier(0.25,1,0.5,1)]
                            ${isMenuOpen ? "top-2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute w-2/3 h-[1.5px] bg-current top-1.5
                            transition-all duration-300
                            ease-[cubic-bezier(0.25,1,0.5,1)]
                            ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute w-full h-[1.5px] bg-current
                            transition-all duration-300
                            ease-[cubic-bezier(0.25,1,0.5,1)]
                            ${isMenuOpen ? "top-2 -rotate-45" : "top-3"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MENU OVERLAY */}
      <div
        className={`menu-overlay fixed inset-0 z-40 bg-white text-neutral-900 ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-12">
          <div className="flex flex-col justify-center flex-1">
            {["Home", "About", "Products", "Services", "Contact", "Careers"].map(
              (item, i) => (
                <Link
                  key={item}
                  href="/"
                  className="flex items-center justify-center flex-1
                             group hover:bg-neutral-950
                             transition-all duration-500
                             ease-[cubic-bezier(0.25,1,0.5,1)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span
                    className="text-3xl tracking-tight uppercase
                               reveal-text md:text-5xl
                               text-neutral-900 group-hover:text-white
                               group-hover:tracking-wider
                               transition-all duration-500
                               ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ transitionDelay: `${150 + i * 50}ms` }}
                  >
                    {item}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* HERO BACKGROUND REF */}
      <div ref={heroBgRef} />
    </>
  );
}
