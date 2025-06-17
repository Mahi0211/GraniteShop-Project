import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productMain from "../assets/Images/ProductMain.jpg";
import VerticalSwipeCards from "./VerticalSwipeCards";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const productRef = useRef(null);

  useEffect(() => {
    const el = productRef.current;

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
    <div ref={productRef} className="mt-[100px] relative" id="products">
      <img
        src={productMain}
        alt="Main"
        className="w-full h-[800px] object-cover"
      />
      <div className="absolute top-8 left-8 z-10 text-white">
        <h1
          className="text-[72px] ml-[40px] text-shadow-sm"
          style={{ fontFamily: "Benzin" }}
        >
          <span>Granite</span>
          <span className="block">That Defines</span>
          <span>Excellence</span>
        </h1>
        <button
          style={{ fontFamily: "FTHabitMedium" }}
          className="ml-[40px] mt-4 px-6 py-2 bg-white text-black text-lg rounded-4xl shadow-md cursor-pointer"
        >
          View All
        </button>
      </div>
      <VerticalSwipeCards />
    </div>
  );
};

export default Product;
