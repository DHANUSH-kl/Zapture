"use client";

import Image from "next/image";

const images = [
  // "/built/1.jpeg",
  "/built/2.jpeg",
  "/built/3.jpeg",
  "/built/4.jpeg",
  "/built/5.jpeg",
  "/built/6.jpeg",
];

export default function BuiltByUs() {
  return (
    <section className="relative py-2 pb-8 overflow-hidden text-white bg-neutral-950">
      {/* Header */}
      <div className="px-6 mx-auto mb-16 max-w-7xl">
        <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Built by us
        </h2>
        {/* <p className="max-w-xl mt-4 text-neutral-400">
          Handcrafted landing pages, systems, and brand experiences built for
          real businesses.
        </p> */}
      </div>

      {/* Masonry Grid */}
      <div className="px-6 mx-auto max-w-7xl">
        <div className="gap-6 space-y-6 columns-1 sm:columns-2 md:columns-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl break-inside-avoid bg-neutral-900 group"
            >
              <Image
                src={src}
                alt={`Zapturre work ${i + 1}`}
                width={600}
                height={800}
                className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                priority={i < 2} // improves LCP
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end p-5 transition-all duration-500 bg-black/0 group-hover:bg-black/40">
                <span className="text-sm tracking-wide transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  Zapturre Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
