// app/(sections)/navbar/Navbar.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  // close mobile menu when clicking outside (ignore toggle clicks)
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (!isMenuOpen) return;
      if (menuBtnRef.current && menuBtnRef.current.contains(target)) return;
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isMenuOpen]);

  return (
    <>
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
        <div className="absolute inset-0 bg-grain opacity-20"></div>
      </div>

      {/* Header = positioning root for the mobile toggle (fixed to viewport) */}
      <header className="fixed top-0 left-0 right-0 z-50" role="banner">
        <div className="relative flex justify-center px-4 pt-6 overflow-visible animate-enter">
          <nav
            className="relative flex items-center justify-between w-full max-w-4xl px-2 py-2 transition-all duration-300 rounded-full glass-nav"
            role="navigation"
            aria-label="Main"
          >
            {/* Logo Area */}
            <div className="flex items-center pl-4">
              <a href="#" className="flex items-center gap-2 group" aria-label="Zapture home">
                <div className="relative flex items-center justify-center w-8 h-8 transition-colors border rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-900 border-white/10 group-hover:border-white/20">
                  <span className="text-sm font-medium text-white">Z</span>
                </div>
                <span className="text-lg font-medium tracking-tighter text-white transition-colors group-hover:text-neutral-200">
                  ZAPTURE
                </span>
              </a>
            </div>

            {/* Desktop Links (centered) */}
            <ul className="absolute items-center hidden gap-1 -translate-x-1/2 md:flex left-1/2">
              <li>
                <a href="#services" className="px-4 py-2 text-sm font-normal transition-colors duration-300 nav-link text-neutral-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="px-4 py-2 text-sm font-normal transition-colors duration-300 nav-link text-neutral-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="px-4 py-2 text-sm font-normal transition-colors duration-300 nav-link text-neutral-400 hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>

            {/* Desktop CTA Button */}
            <div className="relative flex items-center gap-3 pr-1">
              <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Contact Us
              </a>

              {/* Mobile Hamburger Button - positioned inside the nav */}
              <button
                id="menu-btn"
                ref={menuBtnRef}
                onClick={() => setIsMenuOpen((s) => !s)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full md:hidden bg-white/5 border-white/10 text-neutral-300 hover:text-white hover:bg-white/10"
              >
                {isMenuOpen ? (
                  // X icon
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay - positioned relative to viewport */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`${isMenuOpen ? "block" : "hidden"} absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-md glass-nav rounded-2xl flex-col p-2 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl z-40`}
        >
          <a href="#services" className="flex items-center justify-between p-4 transition-colors border border-transparent group rounded-xl hover:bg-white/5 hover:border-white/5" onClick={() => setIsMenuOpen(false)}>
            <span className="text-sm font-medium text-neutral-200 group-hover:text-white">Services</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-colors text-neutral-500 group-hover:text-white" aria-hidden>
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="#about" className="flex items-center justify-between p-4 transition-colors border border-transparent group rounded-xl hover:bg-white/5 hover:border-white/5" onClick={() => setIsMenuOpen(false)}>
            <span className="text-sm font-medium text-neutral-200 group-hover:text-white">About Us</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-colors text-neutral-500 group-hover:text-white" aria-hidden>
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="#testimonials" className="flex items-center justify-between p-4 transition-colors border border-transparent group rounded-xl hover:bg-white/5 hover:border-white/5" onClick={() => setIsMenuOpen(false)}>
            <span className="text-sm font-medium text-neutral-200 group-hover:text-white">Testimonials</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-colors text-neutral-500 group-hover:text-white" aria-hidden>
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div className="p-1 mt-2">
            <a href="#contact" className="flex items-center justify-center w-full py-3 text-sm font-medium text-black transition-colors bg-white rounded-lg hover:bg-neutral-200" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <style jsx>{`
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

        /* keep underline glow working */
        :global(.nav-link) {
          position: relative;
        }
        :global(.nav-link)::after {
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
        :global(.nav-link):hover::after {
          transform: translateX(-50%) scaleX(0.8);
        }

        /* Responsive adjustments */
        @media (max-width: 767px) {
          header > div {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          nav {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          /* Adjust logo text on very small screens */
          .logo-text {
            font-size: 0.875rem;
          }
        }
        
        @media (max-width: 520px) {
          /* Ensure the nav container fits within the viewport */
          header > div {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          /* Adjust mobile menu for very small screens */
          #mobile-menu {
            width: calc(100vw - 1.5rem);
            top: 5rem;
          }
        }
        
        @media (max-width: 380px) {
          /* Further adjustments for very small screens */
          nav {
            padding-left: 0.25rem;
            padding-right: 0.25rem;
          }
          
          .logo-text {
            font-size: 0.75rem;
          }
          
          #mobile-menu {
            top: 5.5rem;
          }
        }
      `}</style>
    </>
  );
}