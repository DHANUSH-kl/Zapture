"use client";

import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 mt-20 bg-black border-t border-neutral-800">
      <div className="max-w-5xl px-6 mx-auto">
        <div className="grid grid-cols-2 gap-12 mb-20 md:grid-cols-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <span className="text-lg font-medium tracking-tight">Konpo</span>
            </div>
            <p className="text-base leading-relaxed text-neutral-500">
              Designing the interface
              <br /> of the next web.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-medium text-white">Product</h4>
            <ul className="space-y-4 text-base text-neutral-500">
              <li><a href="#" className="transition-colors hover:text-white">Changelog</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Documentation</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Integrations</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-medium text-white">Company</h4>
            <ul className="space-y-4 text-base text-neutral-500">
              <li><a href="#" className="transition-colors hover:text-white">About</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-6 font-medium text-white">Stay updated</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="email@domain.com"
                className="px-4 py-3 text-sm transition-all border rounded-lg bg-neutral-900 border-neutral-800 text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-500"
              />
              <button className="px-4 py-3 text-sm font-medium text-black transition-colors bg-white rounded-lg hover:bg-neutral-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 text-sm border-t md:flex-row border-neutral-900 text-neutral-600">
          <p>© 2024 Konpo Inc. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="transition-colors hover:text-neutral-400"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="transition-colors hover:text-neutral-400"><Github className="w-5 h-5" /></a>
            <a href="#" className="transition-colors hover:text-neutral-400"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
