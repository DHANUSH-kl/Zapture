"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote as IconQuote, Zap, PenTool, Layers, Activity } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Testimonial = {
  name: string;
  titlePrefix: string;
  company: string;
  image: string;
  quote: string;
  icon?: React.ReactNode;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Edwin Chen",
    titlePrefix: "Founder and CEO,",
    company: "Surge AI",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote:
      "The platform has completely transformed how we handle data labeling. It's not just a tool; it's an extension of our engineering team. The latency reduction alone has been a game-changer for our real-time models.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Vladimir Danila",
    titlePrefix: "Founder and CEO,",
    company: "Linearity",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop",
    quote:
      "Konpo for us is like our internal design team. Every single design they made for us is amazing. We're super happy to work with them and would not replace them with anyone else. They simply go the extra mile.",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    name: "Sasha Morris",
    titlePrefix: "Director of Product,",
    company: "Relias",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote:
      "The level of detail and precision provided is unmatched. We were able to ship our new interface 3x faster than anticipated, with zero technical debt added to our stack.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    name: "Trond Erik Vee Aune",
    titlePrefix: "CEO,",
    company: "Vectron Bio",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    quote:
      "A masterpiece of software engineering. It integrated seamlessly with our bio-informatics pipeline, allowing us to visualize complex data structures without any performance hit.",
    icon: <Activity className="w-5 h-5" />,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentsRef = useRef<(HTMLDivElement | null)[]>([]);

  /* ---------------- HEADER APPEAR ANIMATION ---------------- */
  useEffect(() => {
    if (!headerRef.current || !titleRef.current || !subtitleRef.current)
      return;

    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
      });

      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 30,
        filter: "blur(6px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
      }).to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
        },
        "+=0.5"
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- INITIAL ACCORDION STATE ---------------- */
  useEffect(() => {
    contentsRef.current.forEach((content, index) => {
      if (!content) return;

      if (index === activeIndex) {
        gsap.set(content, { height: "auto", opacity: 1 });
      } else {
        gsap.set(content, { height: 0, opacity: 0 });
      }
    });
  }, []);

  function toggleItem(index: number) {
    if (index === activeIndex) return;

    const oldContent = contentsRef.current[activeIndex];
    const newContent = contentsRef.current[index];
    const oldItem = itemsRef.current[activeIndex];
    const newItem = itemsRef.current[index];

    if (oldContent) {
      gsap.to(oldContent, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      const head = oldItem?.querySelector("h3");
      if (head) gsap.to(head, { color: "#e5e5e5", duration: 0.3 });
    }

    if (newContent) {
      gsap.set(newContent, { height: "auto" });
      gsap.from(newContent, { height: 0, duration: 0.6, ease: "expo.out" });
      gsap.to(newContent, { opacity: 1, duration: 0.4 });

      const inner = newContent.querySelectorAll("img, p, i");
      gsap.fromTo(
        inner,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 }
      );

      const head = newItem?.querySelector("h3");
      if (head) gsap.to(head, { color: "#ffffff", duration: 0.3 });
    }

    setActiveIndex(index);
  }

  return (
    <>
      {/* HEADER */}
      <div
        ref={headerRef}
        className="w-full max-w-5xl px-6 pt-4 mx-auto mb-24 md:px-12 md:pt-2"
      >
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]"
        >
          Trusted by the builders <br /> defining the future.
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-2xl mt-6 text-base font-light leading-relaxed sm:text-lg md:text-xl text-neutral-400"
        >
          Join thousands of developers and designers who rely on our
          infrastructure to scale their visions from zero to one, and beyond.
        </p>
      </div>

      {/* ACCORDION */}
      <main className="relative z-10 w-full max-w-5xl px-6 pb-32 mx-auto">
        <div className="border-t border-neutral-800">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.name}
              ref={(el) => {
                itemsRef.current[idx] = el;
              }}
              className="transition-colors duration-500 border-b cursor-pointer border-neutral-800 hover:border-neutral-600 group"
              onClick={() => toggleItem(idx)}
            >
              <div className="flex flex-col justify-between py-8 pr-4 md:flex-row md:items-center md:py-10">
                <h3 className="text-2xl font-medium tracking-tight md:text-3xl text-neutral-200 group-hover:text-white">
                  {t.name}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-lg font-light md:mt-0 text-neutral-500">
                  <span>{t.titlePrefix}</span>
                  <span className="font-medium text-neutral-300">
                    {t.company}
                  </span>
                </div>
              </div>

              <div
                ref={(el) => {
                  contentsRef.current[idx] = el;
                }}
              >
                <div className="pt-2 pb-10">
                  <div className="relative p-8 overflow-hidden border md:p-12 border-neutral-800 rounded-3xl bg-neutral-900/50">
                    <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-12">
                      <div className="flex flex-col gap-6 md:col-span-3">
                        <div className="w-24 h-24 overflow-hidden shadow-2xl rounded-2xl bg-neutral-800 ring-1 ring-white/10">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="object-cover w-full h-full transition-opacity duration-500 grayscale opacity-80 hover:opacity-100"
                          />
                        </div>

                        <div className="flex items-center gap-2 text-neutral-400">
                          {t.icon}
                          <span className="text-sm font-medium tracking-wide uppercase">
                            {t.company}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-8 md:col-span-9">
                        <IconQuote className="w-8 h-8 fill-current text-neutral-600" />
                        <p className="text-xl font-light leading-relaxed md:text-2xl text-neutral-200">
                          {t.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
