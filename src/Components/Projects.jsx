import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalSwipeCards from "./HorizontalSwipeCards";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const el = projectsRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when top of element hits 80% viewport
          toggleActions: "play none none none", // play once
        },
      }
    );
  }, []);

  return (
    <div ref={projectsRef} className="mx-[40px] mt-[100px]">
      <div className="flex items-center justify-between">
        <h1 style={{ fontFamily: "Benzin" }} className="text-6xl">
          Our Latest Projects
        </h1>
        <div
          className="flex text-4xl items-center gap-[20px]"
          style={{ fontFamily: "Benzin" }}
        >
          <button className="p-[10px] border rounded-full">←</button>
          <button className="p-[10px] border rounded-full">→</button>
        </div>
      </div>
      <HorizontalSwipeCards />
    </div>
  );
};

export default Projects;
