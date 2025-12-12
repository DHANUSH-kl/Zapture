"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);


export default function Hero() {

    const timeline = gsap.timeline();

  
  useGSAP(() => {
      timeline.from('#toptext',{
        x:-500,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        delay: 1,
      })

      timeline.from('#bottomtext',{
        x: 500,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        delay: 0.3,
      }, '<')

     
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top top",
        end: "+=700",
        scrub: 2,
        pin: "#heroTextContainer",
        pinSpacing: true,
        // markers: true,
      }
    });

   
    scrollTl.fromTo(
     "#toptext",
     { x: 0 },        
     { x: "120vw", ease: "none" }  
    ); 

    
    scrollTl.fromTo(
     "#bottomtext",
     { x: 0 },        
     { x: "-120vw", ease: "none" },
      '<'  
    ); 

    
  }, []);
  
  return (
    <section id="heroSection" className="min-h-screen bg-black px-[17px] overflow-hidden">
      <div id="heroTextContainer" className="flex flex-col justify-between w-full h-screen">
  
  <div className="w-full flex justify-start items-start pt-[22px]">
    <h1 id="toptext" className="text-[13vw] font-bold leading-none">
      EVERYTHING
    </h1>
  </div>

  <div className="w-full flex justify-end items-end pb-[22px]">
    <h1 id="bottomtext" className="text-[13vw] font-bold leading-none ">
      BEGINS HERE
    </h1>
  </div>

</div>

      {/* <div className="h-screen bg-amber-200"></div> */}
      
    </section>
  );
}
