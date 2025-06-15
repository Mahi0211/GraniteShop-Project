import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import selection1 from "../assets/Images/Project1.jpg";
import selection2 from "../assets/Images/Project2.jpg";
import selection3 from "../assets/Images/Project3.jpg";
import selection4 from "../assets/Images/Project4.jpg";
import selection5 from "../assets/Images/Project5.jpg";
import selection6 from "../assets/Images/Project6.jpg";

const scrollerArr = [
  { name: "Chic Urban Kitchen", img: selection1, area: "Chennai" },
  { name: "Spa-Inspired Bathroom", img: selection2, area: "Chennai" },
  { name: "Elegant Living Space", img: selection3, area: "Chennai" },
  { name: "Outdoor Entertainment Area", img: selection4, area: "Chennai" },
  { name: "Cafe", img: selection5, area: "Chennai" },
  { name: "Office", img: selection6, area: "Chennai" },
];

const HorizontalSwipeCards = () => {
  const wrapperRef = useRef();
  const scrollerRef = useRef();
  const tlRef = useRef();

  useEffect(() => {
    const el = scrollerRef.current;
    const itemWidth = el.scrollWidth / 2;

    const tl = gsap.to(el, {
      x: `-${itemWidth}px`,
      duration: scrollerArr.length * 6,
      ease: "none",
      repeat: -1,
      delay: 1,
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
      className="relative w-full py-8 px-4 overflow-hidden mt-[20px]"
    >
      <div ref={scrollerRef} className="flex space-x-4">
        {[...scrollerArr, ...scrollerArr].map((item, index) => (
          <div
            key={index}
            className="text-black w-[400px] flex-shrink-0"
          >
            <div className="p-[10px] rounded-md bg-white shadow-[3px_3px_3px_#d1d9e6,-1px_-1px_3px_#d1d9e6]">
              <img
                src={item.img}
                alt={item.name}
                className="w-[400px] h-[330px] object-cover"
              />
            </div>

            <h1
              className="text-lg font-semibold mt-2"
              style={{ fontFamily: "FTHabitRegular" }}
            >
              {item.name}
            </h1>
            <p style={{ fontFamily: "FTHabitLight" }}>{item.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSwipeCards;
