import project1 from "../assets/Images/Project1.jpeg";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;

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
    <div ref={aboutRef} className="flex h-[350px] w-full mt-[100px] pl-[20px]" id="about">
      <div
        className="w-1/3 ml-10 flex flex-col justify-between"
        style={{ fontFamily: "FTHabitRegular" }}
      >
        <h1>About Us</h1>
        <img
          src={project1}
          alt="project1"
          className="w-40 h-40 object-cover object-bottom"
        />
      </div>
      <div className="w-2/3 mr-10 pr-20 flex flex-col justify-between">
        <p style={{ fontFamily: "FTHabitRegular" }} className="text-2xl">
          GraniteWorks combines expert craftsmanship with innovative design to
          create stunning, durable surfaces. Our premium granite solutions
          enhance spaces with timeless beauty and lasting resilience.
        </p>
        <div className="flex w-full gap-20">
          <div className="flex flex-col justify-center gap-3">
            <div className="flex">
              <h1 style={{ fontFamily: "Benzin" }} className="text-9xl">
                17
              </h1>
              <p
                style={{ fontFamily: "FTHabitBold" }}
                className="text-7xl text-blue-600"
              >
                +
              </p>
            </div>
            <p style={{ fontFamily: "FTHabitRegular" }} className="pl-3">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <div className="flex">
              <h1 style={{ fontFamily: "Benzin" }} className="text-9xl">
                61
              </h1>
              <p
                style={{ fontFamily: "FTHabitBold" }}
                className="text-7xl text-orange-600"
              >
                +
              </p>
            </div>
            <p style={{ fontFamily: "FTHabitRegular" }} className="pl-3">
              Total Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
