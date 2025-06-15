import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import stone3 from "../assets/Images/stone3.jpg";
import HeroImage from "../assets/Images/hero_temp.jpg";

const Hero = () => {
  const secondBoxRef = useRef(null);
  const graniteRef = useRef(null);
  const eleganceRef = useRef(null);
  const graniteRef1 = useRef(null);
  const eleganceRef1 = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    if (!graniteRef.current && !eleganceRef.current) return;
    if (!graniteRef1.current && !eleganceRef1.current) return;
    if (!boxRef.current) return;

    gsap.fromTo(
      secondBoxRef.current,
      { scale: 0 },
      { scale: 1, duration: 1, delay: 0.5 } // Added delay for effect
    );

    gsap.fromTo(
      boxRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.5,
        delay: 1,
      }
    );

    gsap.from(graniteRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(eleganceRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      delay: 1,
    });
    gsap.from(graniteRef1.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(eleganceRef1.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      delay: 1,
    });
  });
  return (
    <main id="home" className="bg-gray-100">
      <div className="flex w-full items-end pt-[180px]">
        <h1
          style={{ fontFamily: "Benzin" }}
          className="text-[72px] w-1/3 ml-[40px]"
        >
          <span ref={graniteRef}>Granite</span>
          <span ref={eleganceRef} className="block">
            Elegance
          </span>
        </h1>
        <div className="w-1/3 mx-[80px] px-[40px]">
          <p
            style={{ fontFamily: "FTHabitRegular" }}
            className="font-bold"
            ref={graniteRef1}
          >
            Elevate your space with timeless granite designs that blend
            sophistication with resilience. Experience unmatched quality and
            craftsmanship tailored to your unique vision.
          </p>
          <button
            className="bg-black text-white py-[10px] px-[20px] rounded-3xl text-[13px] mt-5 cursor-pointer"
            style={{ fontFamily: "FTHabitRegular" }}
            ref={eleganceRef1}
          >
            Learn more
          </button>
        </div>
        <div className="relative pr-[40px]" ref={secondBoxRef}>
          <img src={stone3} alt="First-img" className="w-80 rounded-2xl" />
        </div>
      </div>
      <div className="mt-[65px]">
        <img
          src={HeroImage}
          alt="Hero-Image"
          className="w-full"
          ref={boxRef}
        />
      </div>
    </main>
  );
};

export default Hero;
