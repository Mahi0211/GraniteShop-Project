import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import selection1 from "../assets/Images/Selection1.jpg";
import selection2 from "../assets/Images/Selection2.jpg";
import selection3 from "../assets/Images/Selection3.jpg";
import selection4 from "../assets/Images/Selection4.jpg";
import selection5 from "../assets/Images/Selection5.jpg";
import selection6 from "../assets/Images/Selection6.jpg";

const scrollerArr = [
  { name: "Kitchen Countertops", img: selection1 },
  { name: "Bathroom Vanities", img: selection2 },
  { name: "Flooring & Wall Cladding", img: selection3 },
  { name: "Custom Projects", img: selection4 },
  { name: "Outdoor Applications", img: selection5 },
  { name: "Fireplace Surrounds", img: selection6 },
];

const VerticalSwipeCards = () => {
  const wrapperRef = useRef();
  const scrollerRef = useRef();
  const tlRef = useRef();

  useEffect(() => {
    const el = scrollerRef.current;
    const itemHeight = el.scrollHeight / 2;

    // MUCH slower & smoother scroll
    const tl = gsap.to(el, {
      y: `-${itemHeight}px`,
      duration: scrollerArr.length * 6, // ⬅️ Higher duration = slower
      ease: "none", // ⬅️ no acceleration/deceleration, smooth
      repeat: -1,
      delay: 1, // ⬅️ start delay
    });

    tlRef.current = tl;

    const wrapper = wrapperRef.current;
    wrapper.addEventListener("mouseenter", () => tl.pause());
    wrapper.addEventListener("mouseleave", () => tl.resume());

    return () => {
      wrapper.removeEventListener("mouseenter", () => tl.pause());
      wrapper.removeEventListener("mouseleave", () => tl.resume());
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute top-0 right-8 z-10 h-full w-[320px] flex items-center overflow-hidden"
    >
      <div ref={scrollerRef} className="space-y-4">
        {[...scrollerArr, ...scrollerArr].map((item, index) => (
          <div
            key={index}
            className="bg-white text-black p-3 w-[300px] shadow-md"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-[300px] h-[330px] object-cover"
            />
            <h1 className="text-lg font-semibold mt-2" style={{ fontFamily: "FTHabitRegular" }}>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSwipeCards;
