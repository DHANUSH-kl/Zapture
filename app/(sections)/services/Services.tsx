"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);


export default function Services() {

    return(
         <>
         <div className="w-full min-h-screen mainContainer bg-[#000] py-6 px-26 flex flex-col items-end justify-start">

            <div className="flex flex-col items-end justify-start w-full texts">
                <h1 className="text-[#fff] text-[96px] font-bold">All Directions. One Vision.</h1>   
                <p className="text-[#fff] text-[24px] font-bold mt-[-14px]">Zapturre unites creativity, tech, and culture to move brands forward</p>
            </div>

            <div className="w-full servicesContainer mt-[102px]">
                
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Branding</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Design</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Storytelling</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Marketing</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Strategy</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Development</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Automation</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Advertising</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
                <div className="cursor-pointer service">
                    <p className="text-[#fff] font-bold text-[64px]">Content</p>
                    <hr className="w-full text-[#fff] opacity-80"/>
                </div>
            </div>
            
         </div>
        </>
    );

   

} 