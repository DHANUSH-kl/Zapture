"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-900 text-neutral-400">
      <div className="px-6 pt-20 pb-12 mx-auto max-w-7xl lg:px-8">

        {/* ---------------- TOP CTA ---------------- */}
        <div className="flex flex-col items-start justify-between gap-8 mb-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-5xl font-medium tracking-tighter text-white lg:text-7xl">
              Let&apos;s build something <br />
              <span className="text-neutral-600">extraordinary.</span>
            </h2>
          </div>

          <a
            href="https://forms.gle/yajTUhDy2oHbWUp59"
            className="flex items-center gap-3 text-lg font-medium tracking-tight text-white transition-colors duration-300 group lg:text-xl hover:text-neutral-400"
          >
            Start a Project
            <Icon
              icon="lucide:arrow-up-right"
              width={24}
              height={24}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* ---------------- MIDDLE GRID ---------------- */}
        <div className="grid grid-cols-1 gap-12 pt-16 border-t md:grid-cols-2 lg:grid-cols-12 border-neutral-900">

          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <a
              href="#"
              className="inline-block text-2xl font-medium tracking-tighter text-white"
            >
              ZAPTURRE
            </a>

            <p className="max-w-sm text-sm font-light leading-relaxed">
              We design, build, and scale digital products that convert.
              Elevating brands through precision engineering and timeless
              aesthetics.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-neutral-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Contact */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <span className="text-sm font-medium text-white">
              Get in touch
            </span>

            <a
              href="mailto:support@zapturre.com"
              className="text-sm font-light transition-colors hover:text-white"
            >
              support@zapturre.com
            </a>

            <div className="text-sm font-light text-neutral-500">
              Based in India <br />
              Working Worldwide
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <span className="text-sm font-medium text-white">
              Connect
            </span>

            <ul className="flex flex-col gap-3">
              {[
                { label: "LinkedIn", icon: "lucide:linkedin", href: "https://www.linkedin.com/company/zapturre/" },
                { label: "Twitter / X", icon: "lucide:twitter", href: "https://x.com/zapturre" },
                {
                  label: "Instagram",
                  icon: "lucide:instagram",
                  href: "https://www.instagram.com/zapturre?igsh=MW8zdWV4cW9jN3hlZw==",
                },
                // { label: "Dribbble", icon: "lucide:dribbble" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-light transition-colors group hover:text-white"
                  >
                    <Icon
                      icon={item.icon}
                      width={18}
                      height={18}
                      className="transition-colors text-neutral-500 group-hover:text-white"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------- BOTTOM BAR ---------------- */}
        <div className="flex flex-col items-center justify-between gap-6 pt-16 mt-16 border-t md:flex-row border-neutral-900">
          <p className="text-xs font-light text-neutral-600">
            © 2025 ZAPTURRE . All rights reserved.
          </p>

          <div className="flex gap-8">
            <a
              // href="#"
              className="text-xs font-light transition-colors text-neutral-600 hover:text-neutral-400"
            >
              Privacy Policy
            </a>
            <a
              // href="#"
              className="text-xs font-light transition-colors text-neutral-600 hover:text-neutral-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
