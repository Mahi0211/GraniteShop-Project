import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import graniteWork from "../assets/Images/GraniteWork1.jpg";
import img1 from "../assets/Images/Black Galaxy Granite.jpg";
import img2 from "../assets/Images/Kashmir White Granite.jpg";
import img3 from "../assets/Images/Tan Brown Granite.jpg";
import img4 from "../assets/Images/Viscont White Granite.jpg";

gsap.registerPlugin(ScrollTrigger);

const collectionArr = [
  {
    name: "Black Galaxy Granite",
    collections: 35,
    img: img1,
  },
  {
    name: "Kashmir White Granite",
    collections: 20,
    img: img2,
  },
  {
    name: "Tan Brown Granite",
    collections: 17,
    img: img3,
  },
  {
    name: "Viscont White Granite",
    collections: 28,
    img: img4,
  },
];

const Collection = () => {
  const collectionRef = useRef(null);

  useEffect(() => {
    const el = collectionRef.current;

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
    <div
    id="gallery"
      ref={collectionRef}
      className="bg-zinc-900 mt-[100px] flex gap-[100px] px-[40px] py-[80px]"
    >
      <div className="">
        <img
          src={graniteWork}
          alt=""
          className="h-[600px] w-[450px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 style={{ fontFamily: "Benzin" }} className="text-white text-6xl">
          Explore Our Granite
          <span className="block mt-4">Gallery</span>
        </h1>
        <p
          style={{ fontFamily: "FTHabitLight" }}
          className="text-white w-[600px] mt-[30px]"
        >
          From the quiet strength of stone to the subtle interplay of texture
          and light, each slab tells a story of nature’s artistry. Handpicked
          for character and crafted for timeless spaces, our collection is where
          design meets enduring beauty.
        </p>
        <div className="grid grid-cols-2 gap-6 text-white mt-[40px]">
          {collectionArr.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl shadow-[9px_9px_15px_theme(colors.zinc.950),_-2px_-2px_4px_theme(colors.zinc.800)] flex p-[20px] gap-[20px]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-[80px] h-[80px] object-cover"
              />
              <div className="flex flex-col justify-between">
                <h1
                  style={{ fontFamily: "FTHabitRegular" }}
                  className="text-xl"
                >
                  {item.name}
                </h1>
                <p style={{ fontFamily: "FTHabitLight" }} className="text-sm">
                  {item.collections} collection
                </p>
                <p style={{ fontFamily: "FTHabitRegular" }}>→</p>
              </div>
            </div>
          ))}
          {/* <div class="w-52 h-52 bg-zinc-900 rounded-4xl shadow-[9px_9px_15px_theme(colors.zinc.950),_-2px_-2px_4px_theme(colors.zinc.800)]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Collection;
