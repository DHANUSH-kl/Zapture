"use client";

import { useEffect, useRef, useState } from "react";
import {
  Aperture,
  CornerDownRight,
  ArrowRight,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [revealText, setRevealText] = useState(false);
  const [revealDesc, setRevealDesc] = useState(false);
  const [revealBtn, setRevealBtn] = useState(false);

  /* ---------------- CURSOR ---------------- */
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const enter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
    };

    const leave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  /* ---------------- LOADER ---------------- */
  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.random() * 3 + 0.5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(false);

          // TEXT FIRST
          setTimeout(() => setRevealText(true), 400);

          // DESC AFTER 1s
          setTimeout(() => setRevealDesc(true), 1400);

          // BUTTON AFTER
          setTimeout(() => setRevealBtn(true), 1700);
        }, 200);
      }
      setCount(Math.floor(current));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className={`char-reveal ${revealText ? "active" : ""}`}
        style={{ transitionDelay: `${i * 0.05}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <>
      {/* ---------------- GLOBAL STYLES ---------------- */}
      <style jsx global>{`
        body {
          background: #000;
          color: #fff;
          cursor: none;
          font-family: "Inter", sans-serif;
        }

        .char-reveal {
          display: inline-block;
          transform: translateY(120%);
          opacity: 0;
          transition:
            transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 1.2s ease;
        }

        .char-reveal.active {
          transform: translateY(0);
          opacity: 1;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 1.2s ease,
            transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        .bg-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
      `}</style>

      {/* ---------------- CURSOR ---------------- */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-white rounded-full hidden md:block pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-difference transition-transform duration-100"
      />

      {/* ---------------- LOADER ---------------- */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between p-6 bg-black md:p-12">
          <div className="flex justify-between">
            <span className="text-xs tracking-widest uppercase text-neutral-500">
              Loading Assets
            </span>
            <Aperture className="w-6 h-6 animate-spin" />
          </div>

          <div>
            <div className="text-[12vw] md:text-[8vw] leading-none font-medium tabular-nums">
              {count.toString().padStart(2, "0")}
            </div>
            <div className="w-full h-[1px] bg-neutral-800 mt-4">
              <div
                className="h-full transition-all duration-300 bg-white"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ---------------- MAIN ---------------- */}
      <main
        className={`relative min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none bg-grid opacity-40" />

        {/* ---------------- HERO ---------------- */}
        <section className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12">
          <div className="max-w-[90rem] mx-auto w-full">
            <div className="flex flex-col gap-4 lg:ml-12">

              <h1 className="text-[13vw] md:text-[9vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden">
                {splitText("EVERYTHING")}
              </h1>

              <div className="flex flex-col gap-12 md:flex-row">
                <h1 className="text-[13vw] md:text-[9vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden">
                  {splitText("BEGINS HERE")}
                </h1>

                {/* -------- DESCRIPTION -------- */}
                <div className={`md:w-80 fade-up ${revealDesc ? "active" : ""}`}>
                  <div className="flex gap-3 pt-6 border-t border-neutral-800">
                    <CornerDownRight className="w-5 h-5 mt-1 text-neutral-500 shrink-0" />

                    <div>
                      <p className="leading-relaxed text-neutral-400">
                        We are the architect of digital perception. A unified
                        agency blending strategy, design, and engineering into a
                        single, formidable solution.
                      </p>

                      <div
                        className={`mt-6 fade-up ${
                          revealBtn ? "active" : ""
                        }`}
                      >
                        <button
  onClick={() =>
    window.open("https://forms.gle/yajTUhDy2oHbWUp59", "_blank")
  }
  className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded"
>
  Start Project <ArrowRight className="w-4 h-4" />
</button>

                      </div>
                    </div>
                  </div>
                </div>
                {/* -------------------------------- */}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="flex flex-col items-end justify-between px-6 py-8 border-t border-neutral-900 md:px-12 md:flex-row">
          {/* <div className="flex gap-8">
            <div>
              <span className="text-[10px] uppercase text-neutral-600">
                Location
              </span>
              <div className="text-xs">San Francisco, CA</div>
            </div>
            <div>
              <span className="text-[10px] uppercase text-neutral-600">
                Inquiries
              </span>
              <div className="text-xs">hello@agncy.one</div>
            </div>
          </div> */}

          <div className="flex items-center gap-6 mt-6 md:mt-0">
            {/* <Twitter className="w-5 h-5 text-neutral-500 hover:text-white" />
            <Instagram className="w-5 h-5 text-neutral-500 hover:text-white" />
            <Linkedin className="w-5 h-5 text-neutral-500 hover:text-white" /> */}
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Accepting new clients
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
