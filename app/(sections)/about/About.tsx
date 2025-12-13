"use client";

import { ScanSearch, PenTool, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="flex flex-col items-start justify-start w-full min-h-screen px-6 text-white bg-black gap-28 md:px-16 py-18">
      
      {/* TEXT SECTION */}
      <div className="flex flex-col items-start justify-start w-full h-full gap-3 texts">
        <h1 className="font-bold text-[32px] md:text-[48px] leading-[112%] tracking-[-3%] max-w-3xl">
          We Help Brands <br />
          Look Better <br />
          Communicate Better <br />
          Perform Better
        </h1>

        <p className="mt-6 text-[16px] md:text-[18px] text-white/80 max-w-2xl">
          Zapture turns your brand into a clear, modern, and high-impact digital
          presence built to impress and perform.
        </p>
      </div>
      
      {/* CARDS */}
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-20 cards md:flex-nowrap">
        
        {/* CARD 1 */}
        <div className="transition-all duration-300 ease-out overflow-hidden flex flex-col card gap-[22px] px-[46px] pt-[38px] pb-[94px] rounded-4xl shadow-[inset_0_-94px_47px_-33px_rgba(20,76,205,1),inset_0_-34px_27px_-10px_rgba(102,148,255,0.1),inset_0_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0_-30px_12px_-1px_rgba(35,102,255,0.15),inset_0_-1px_10.8px_0px_rgba(102,148,255,0.2)] relative
        hover:shadow-[inset_0_-50px_47px_-31px_rgba(20,76,205,1),inset_0_-21px_27px_-10px_rgba(102,148,255,0.5),inset_0_-30px_12px_-1px_rgba(35,102,255,0.15),inset_0_-1px_10.8px_0px_rgba(102,148,255,0.2)] group">

          <div className="rounded-[50%] w-[51px] h-[51px] absolute bg-[#1A4CBF] blur-[19px] top-0 left-[-0.5rem] group-hover:opacity-70 transition-all duration-300"></div>

          <div className="flex flex-col items-start justify-start iconH1 gap-[18px]">
            <img
              src="/brand.svg"
              alt="Brand Icon"
              className="
                w-[40px] h-[40px]
                sm:w-[40px] sm:h-[40px]
                md:w-[40px] md:h-[40px]
              "
            />
            <p className="font-bold text-[24px]">Brand Clarity</p>
          </div>

          <div className="w-56 cardContent">
            <p className="text-[16px]">
              We refine your message so people immediately understand what your
              business stands for.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="transition-all duration-300 ease-out overflow-hidden flex flex-col card gap-[22px] px-[46px] pt-[38px] pb-[94px] rounded-4xl shadow-[inset_0_-94px_47px_-33px_rgba(255,102,0,1),inset_0_-34px_27px_-10px_rgba(255,102,0,0.1),inset_0_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0_-30px_12px_-1px_rgba(255,102,0,0.15),inset_0_-1px_10.8px_0px_rgba(255,102,0,0.2)] relative
        hover:shadow-[inset_0_-50px_47px_-31px_rgba(255,102,0,1),inset_0_-21px_27px_-10px_rgba(255,102,0,0.5),inset_0_-30px_12px_-1px_rgba(255,102,0,0.15),inset_0_-1px_10.8px_0px_rgba(255,102,0,0.2)] group">

          <div className="rounded-[50%] w-[51px] h-[51px] absolute bg-[#FF6600] blur-[19px] top-0 left-[-0.5rem] group-hover:opacity-70 transition-all duration-300"></div>

          <div className="flex flex-col items-start justify-start iconH1 gap-[18px]">
            <img
              src="/design.svg"
              alt="Design Icon"
              className="
                w-[40px] h-[40px]
                sm:w-[40px] sm:h-[40px]
                md:w-[40px] md:h-[40px]
              "
            />
            <p className="font-bold text-[24px]">Smart Design</p>
          </div>

          <div className="w-56 cardContent">
            <p className="text-[16px]">
              Every element is crafted with purpose — clean layouts that feel
              premium and communicate clearly.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="transition-all duration-300 ease-out overflow-hidden flex flex-col card gap-[22px] px-[46px] pt-[38px] pb-[94px] rounded-4xl shadow-[inset_0_-94px_47px_-33px_rgba(138,56,245,1),inset_0_-34px_27px_-10px_rgba(138,56,245,0.1),inset_0_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0_-30px_12px_-1px_rgba(138,56,245,0.15),inset_0_-1px_10.8px_0px_rgba(138,56,245,0.2)] relative
        hover:shadow-[inset_0_-50px_47px_-31px_rgba(138,56,245,1),inset_0_-21px_27px_-10px_rgba(138,56,245,0.5),inset_0_-30px_12px_-1px_rgba(138,56,245,0.15),inset_0_-1px_10.8px_0px_rgba(138,56,245,0.2)] group">

          <div className="rounded-[50%] w-[51px] h-[51px] absolute bg-[#8A38F5] blur-[19px] top-0 left-[-0.5rem] group-hover:opacity-70 transition-all duration-300"></div>

          <div className="flex flex-col items-start justify-start iconH1 gap-[18px]">
            <img
              src="/performance.svg"
              alt="Performance Icon"
              className="
                w-[40px] h-[40px]
                sm:w-[40px] sm:h-[40px]
                md:w-[40px] md:h-[40px]
              "
            />
            <p className="font-bold text-[24px]">Performance Focus</p>
          </div>

          <div className="w-56 cardContent">
            <p className="text-[16px]">
              Fast, modern, conversion-focused builds that make your website look great and work even better.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
