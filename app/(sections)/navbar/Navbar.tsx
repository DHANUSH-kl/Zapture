"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Ensure Iconify script is loaded (so iconify <span> works)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as any).Iconify) return;

    const s = document.createElement("script");
    s.src = "https://code.iconify.design/3/3.1.0/iconify.min.js";
    s.async = true;
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);

  // close mobile menu when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!mobileMenuRef.current) return;
      if (isMenuOpen && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 animate-enter">
      <nav className="relative flex items-center justify-between w-full max-w-4xl px-2 py-2 transition-all duration-300 rounded-full glass-nav">

        {/* Logo Area */}
        <div className="flex items-center pl-4">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 transition-colors border rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-900 border-white/10 group-hover:border-white/20">
              <span className="text-sm font-medium text-white">Z</span>
            </div>
            <span className="text-lg font-medium tracking-tighter text-white transition-colors group-hover:text-neutral-200">
              ZAPTURE
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="absolute items-center hidden gap-1 -translate-x-1/2 md:flex left-1/2">
          <li>
            <a href="#services" className="px-4 py-2 text-sm font-normal transition-colors duration-300 nav-link text-neutral-400 hover:text-white">Services</a>
          </li>
          <li>
            <a href="#about" className="px-4 py-2 text-sm font-normal transition-colors duration-300 nav-link text-neutral-400 hover:text-white">About Us</a>
          </li>
          <li>
            <a href="#testimonials" className="px-4 py-2 text-sm font-normal transition-colors duration-300 nav-link text-neutral-400 hover:text-white">Testimonials</a>
          </li>
        </ul>

        {/* CTA / Action */}
        <div className="flex items-center gap-3 pr-1">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Contact Us
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="menu-btn"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-expanded={isMenuOpen}
            className="relative flex items-center justify-center w-10 h-10 transition-colors border rounded-full md:hidden bg-white/5 border-white/10 text-neutral-300 hover:text-white hover:bg-white/10"
          >
            {isMenuOpen ? (
              <span className="iconify" data-icon="lucide:x" data-width="20" data-height="20" data-stroke-width="1.5"></span>
            ) : (
              <span className="iconify" data-icon="lucide:menu" data-width="20" data-height="20" data-stroke-width="1.5"></span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`${isMenuOpen ? "flex" : "hidden"} absolute top-20 left-4 right-4 glass-nav rounded-2xl flex-col p-2 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl z-40`}
      >
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-4 transition-colors border border-transparent group rounded-xl hover:bg-white/5 hover:border-white/5">
          <span className="text-sm font-medium text-neutral-200 group-hover:text-white">Services</span>
          <span className="transition-colors iconify text-neutral-500 group-hover:text-white" data-icon="lucide:arrow-right" data-width="16"></span>
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-4 transition-colors border border-transparent group rounded-xl hover:bg-white/5 hover:border-white/5">
          <span className="text-sm font-medium text-neutral-200 group-hover:text-white">About Us</span>
          <span className="transition-colors iconify text-neutral-500 group-hover:text-white" data-icon="lucide:arrow-right" data-width="16"></span>
        </a>
        <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-4 transition-colors border border-transparent group rounded-xl hover:bg-white/5 hover:border-white/5">
          <span className="text-sm font-medium text-neutral-200 group-hover:text-white">Testimonials</span>
          <span className="transition-colors iconify text-neutral-500 group-hover:text-white" data-icon="lucide:arrow-right" data-width="16"></span>
        </a>
        <div className="p-1 mt-2">
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center w-full py-3 text-sm font-medium text-black transition-colors bg-white rounded-lg hover:bg-neutral-200">Contact Us</a>
        </div>
      </div>

      <style jsx>{`
        /* re-created styles from your original file so the component renders identical UI/UX */
        .bg-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }

        .glass-nav {
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-enter {
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.7;
        }
        .nav-link:hover::after {
          transform: translateX(-50%) scaleX(0.8);
        }

        /* mobile menu transitions (class toggles on show/hide) */
        #mobile-menu {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        #mobile-menu.hidden {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.95);
        }
        #mobile-menu.flex {
          opacity: 1;
          pointer-events: auto;
          transform: scale(1);
        }

      `}</style>
    </header>
  );
}
