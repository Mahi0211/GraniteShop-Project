import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import stone3 from "../assets/Images/stone3.jpg";
import HeroImage from "../assets/Images/ReducedBG.jpg";

const Hero = () => {
  const graniteRef = useRef(null);
  const eleganceRef = useRef(null);
  const graniteRef1 = useRef(null);
  const eleganceRef1 = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    if (
      !boxRef.current ||
      !graniteRef.current ||
      !eleganceRef.current ||
      !graniteRef1.current ||
      !eleganceRef1.current
    )
      return;

    const tl = gsap.timeline();

    // Animate boxRef first
    tl.fromTo(
      boxRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
        duration: 1.2,
        delay: 0.4,
      }
    );

    // Animate the rest after boxRef completes
    tl.from(
      [
        graniteRef.current,
        eleganceRef.current,
        graniteRef1.current,
        eleganceRef1.current,
      ],
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      },
      "-=0.1" // slight delay after boxRef if desired
    );
  });

  return (
    <main id="home" className="bg-gray-100 relative">
      <div className="pt-[40px] px-[40px]">
        <img
          src={HeroImage}
          alt="Hero-Image"
          className="w-full rounded-2xl h-[690px]"
          ref={boxRef}
        />
      </div>
      <div className="flex w-full items-end absolute bottom-[100px]">
        <h1
          style={{ fontFamily: "Benzin" }}
          className="text-9xl w-1/2 ml-[40px] pl-[40px] text-white text-shadow-lg"
        >
          <span ref={graniteRef}>Granite</span>
          <span ref={eleganceRef} className="block">
            Elegance
          </span>
        </h1>
        <div className="w-1/3 ml-[150px] px-[40px]">
          <p
            style={{ fontFamily: "FTHabitRegular" }}
            className="text-white text-shadow-lg text-[18px]"
            ref={graniteRef1}
          >
            Elevate your space with timeless granite designs that blend
            sophistication with resilience. Experience unmatched quality and
            craftsmanship tailored to your unique vision.
          </p>
          <button
            className="bg-white text-black py-[10px] px-[20px] rounded-3xl text-[13px] mt-5 cursor-pointer"
            style={{ fontFamily: "FTHabitBold" }}
            ref={eleganceRef1}
          >
            Learn more
          </button>
        </div>
        {/* <div className="relative pr-[40px]" ref={secondBoxRef}>
          <img src={stone3} alt="First-img" className="w-80 rounded-2xl" />
        </div> */}
      </div>
    </main>
  );
};

export default Hero;
