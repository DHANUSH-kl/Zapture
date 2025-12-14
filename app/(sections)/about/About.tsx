"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ---------------- INITIAL STATES ---------------- */
      gsap.set(textRef.current?.children || [], {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
      });

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 80,
        scale: 0.96,
      });

      /* ---------------- TEXT ANIMATION ---------------- */
      gsap.to(textRef.current?.children || [], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          once: true,
        },
      });

      /* ---------------- CARDS ANIMATION ---------------- */
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top bottom",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-start justify-start w-full min-h-screen px-6 text-white bg-black md:px-16 py-18 gap-28"
    >
      {/* ---------------- TEXT SECTION ---------------- */}
      <div
        ref={textRef}
        className="flex flex-col items-start justify-start w-full h-full gap-3"
      >
        <h2 className="max-w-3xl font-semibold tracking-tight leading-[1.05]
                       text-4xl md:text-5xl lg:text-6xl">
          We Help Brands <br />
          Look Better <br />
          Communicate Better <br />
          Perform Better
        </h2>

        <p className="max-w-2xl mt-6 text-base leading-relaxed md:text-lg lg:text-xl text-white/80">
          Zapture turns your brand into a clear, modern, and high-impact digital
          presence built to impress and perform.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full h-full gap-20 cards md:flex-nowrap"> {/* CARD 1 */} <div className="card transition-all duration-300 ease-out overflow-hidden flex flex-col gap-[22px] px-[46px] pt-[38px] pb-[94px] rounded-4xl relative group shadow-[inset_0_-94px_47px_-33px_rgba(20,76,205,1),inset_0_-34px_27px_-10px_rgba(102,148,255,0.1),inset_0_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0_-30px_12px_-1px_rgba(35,102,255,0.15),inset_0_-1px_10.8px_0px_rgba(102,148,255,0.2)] hover:shadow-[inset_0_-50px_47px_-31px_rgba(20,76,205,1),inset_0_-21px_27px_-10px_rgba(102,148,255,0.5),inset_0_-30px_12px_-1px_rgba(35,102,255,0.15),inset_0_-1px_10.8px_0px_rgba(102,148,255,0.2)]"> <div className="absolute top-0 left-[-0.5rem] w-[51px] h-[51px] rounded-full bg-[#1A4CBF] blur-[19px] transition-opacity duration-300 group-hover:opacity-70" /> <div className="flex flex-col items-start gap-[18px] iconH1"> <img src="/brand.svg" alt="Brand Icon" className="w-[40px] h-[40px]" /> <p className="font-bold text-[24px]">Brand Clarity</p> </div> <div className="w-56 cardContent"> <p className="text-[16px]"> We refine your message so people immediately understand what your business stands for. </p> </div> </div> {/* CARD 2 */} <div className="card transition-all duration-300 ease-out overflow-hidden flex flex-col gap-[22px] px-[46px] pt-[38px] pb-[94px] rounded-4xl relative group shadow-[inset_0_-94px_47px_-33px_rgba(255,102,0,1),inset_0_-34px_27px_-10px_rgba(255,102,0,0.1),inset_0_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0_-30px_12px_-1px_rgba(255,102,0,0.15),inset_0_-1px_10.8px_0px_rgba(255,102,0,0.2)] hover:shadow-[inset_0_-50px_47px_-31px_rgba(255,102,0,1),inset_0_-21px_27px_-10px_rgba(255,102,0,0.5),inset_0_-30px_12px_-1px_rgba(255,102,0,0.15),inset_0_-1px_10.8px_0px_rgba(255,102,0,0.2)]"> <div className="absolute top-0 left-[-0.5rem] w-[51px] h-[51px] rounded-full bg-[#FF6600] blur-[19px] transition-opacity duration-300 group-hover:opacity-70" /> <div className="flex flex-col items-start gap-[18px] iconH1"> <img src="/design.svg" alt="Design Icon" className="w-[40px] h-[40px]" /> <p className="font-bold text-[24px]">Smart Design</p> </div> <div className="w-56 cardContent"> <p className="text-[16px]"> Every element is crafted with purpose — clean layouts that feel premium and communicate clearly. </p> </div> </div> {/* CARD 3 */} <div className="card transition-all duration-300 ease-out overflow-hidden flex flex-col gap-[22px] px-[46px] pt-[38px] pb-[94px] rounded-4xl relative group shadow-[inset_0_-94px_47px_-33px_rgba(138,56,245,1),inset_0_-34px_27px_-10px_rgba(138,56,245,0.1),inset_0_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0_-30px_12px_-1px_rgba(138,56,245,0.15),inset_0_-1px_10.8px_0px_rgba(138,56,245,0.2)] hover:shadow-[inset_0_-50px_47px_-31px_rgba(138,56,245,1),inset_0_-21px_27px_-10px_rgba(138,56,245,0.5),inset_0_-30px_12px_-1px_rgba(138,56,245,0.15),inset_0_-1px_10.8px_0px_rgba(138,56,245,0.2)]"> <div className="absolute top-0 left-[-0.5rem] w-[51px] h-[51px] rounded-full bg-[#8A38F5] blur-[19px] transition-opacity duration-300 group-hover:opacity-70" /> <div className="flex flex-col items-start gap-[18px] iconH1"> <img src="/performance.svg" alt="Performance Icon" className="w-[40px] h-[40px]" /> <p className="font-bold text-[24px]">Performance Focus</p> </div> <div className="w-56 cardContent"> <p className="text-[16px]"> Fast, modern, conversion-focused builds that make your website look great and work even better. </p> </div> </div> </div>
    </section>
  );
}
