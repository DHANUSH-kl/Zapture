"use client";

import { Icon } from "@iconify/react";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black selection:bg-white selection:text-black">

      {/* Main Wrapper */}
      <div className="w-full max-w-[1920px] mx-auto min-h-screen flex flex-col px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24 relative z-10">

        {/* Header Section */}
        <header className="flex flex-col items-end justify-start w-full mb-24 md:mb-32 lg:mb-40">
          <div className="relative group">
            <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter text-right leading-[0.95] md:leading-[0.9]">
              All Directions.<br />
              <span className="transition-colors duration-700 text-neutral-500 group-hover:text-white">
                One Vision.
              </span>
            </h1>

            {/* Decorative Accent */}
            <div className="absolute w-8 h-8 border-t border-r -right-4 -top-4 md:w-12 md:h-12 border-white/20 rounded-tr-3xl"></div>
          </div>

          <p className="max-w-xs mt-6 text-base font-medium leading-relaxed tracking-tight text-right text-neutral-400 md:text-xl lg:text-2xl md:mt-8 md:max-w-2xl">
            Zapturre unites creativity, tech, and culture to move brands forward.
          </p>
        </header>

        {/* Services List */}
        <div className="flex flex-col items-end w-full">

          {[
            { label: "Branding", icon: "lucide:arrow-down-right" },
            { label: "Design", icon: "lucide:pen-tool" },
            { label: "Storytelling", icon: "lucide:message-circle" },
            { label: "Marketing", icon: "lucide:megaphone" },
            { label: "Strategy", icon: "lucide:target" },
            { label: "Development", icon: "lucide:code-2" },
            { label: "Automation", icon: "lucide:cpu" },
            { label: "Advertising", icon: "lucide:monitor-play" },
            { label: "Content", icon: "lucide:files" },
          ].map((service, index, arr) => (
            <div
              key={service.label}
              className={`group service-row w-full ${
                index === arr.length - 1
                  ? "border-t border-b"
                  : "border-t"
              } border-white/10 hover:border-white/40 transition-colors duration-500 cursor-pointer relative py-8 md:py-10 flex justify-end items-center`}
            >
              {/* Icon (RESPONSIVE SIZE FIXED HERE) */}
              <div className="absolute left-0 flex items-center justify-center text-white md:left-12 icon-reveal">
                <Icon
                  icon={service.icon}
                  className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                  style={{ strokeWidth: 1.5 }}
                />
              </div>

              {/* Text */}
              <h2 className="text-4xl font-semibold tracking-tighter service-text text-neutral-600 group-hover:text-white md:text-6xl lg:text-8xl">
                {service.label}
              </h2>
            </div>
          ))}
        </div>

        {/* Footer / Bottom Decoration */}
        <div className="flex items-end justify-between w-full mt-24 text-neutral-700">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest uppercase">
              Est. 2024
            </span>
            <span className="font-mono text-xs tracking-widest uppercase">
              Global
            </span>
          </div>

          <div className="hidden gap-4 md:flex">
            <Icon
              icon="lucide:globe"
              className="w-5 h-5 transition-colors cursor-pointer hover:text-white"
              style={{ strokeWidth: 1.5 }}
            />
            <Icon
              icon="lucide:arrow-up-right"
              className="w-5 h-5 transition-colors cursor-pointer hover:text-white"
              style={{ strokeWidth: 1.5 }}
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Noise / Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] mix-blend-overlay"></div>
      </div>
    </div>
  );
}
