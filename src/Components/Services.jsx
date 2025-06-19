import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon1 from "../assets/Icons/icons8-design-ios-17-filled/icons8-design-50.png";
import icon2 from "../assets/Icons/icons8-hammer-ios-17-filled/icons8-hammer-50.png";
import icon3 from "../assets/Icons/icons8-quality-ios-17-filled/icons8-quality-50.png";
import icon4 from "../assets/Icons/icons8-reward-ios-17-filled/icons8-reward-50.png";

gsap.registerPlugin(ScrollTrigger);

const servicesArr = [
  {
    name: "Unrivaled Quality",
    icon: icon3,
    details:
      "Sourcing only the finest natural granite from quarries worldwide, ensuring superior aesthetics and durability.",
  },
  {
    name: "Expert Craftsmanship",
    icon: icon4,
    details:
      "Our skilled artisans meticulously cut, shape, and polish every slab to perfection, delivering flawless results.",
  },
  {
    name: "Seamless Installation",
    icon: icon2,
    details:
      "Professional and efficient installation services guarantee a perfect fit and finish, minimizing disruption to your home.",
  },
  {
    name: "Bespoke Designs",
    icon: icon1,
    details:
      "Collaborate with our designers to create custom granite solutions tailored to your unique vision and space requirements.",
  },
];

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const el = servicesRef.current;

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
    <div ref={servicesRef} className="mt-[100px]" id="services">
      <h1 style={{ fontFamily: "Benzin" }} className="text-4xl text-center">
        Why Choose <span className="block mt-[20px]">Rudra Granites & Tiles?</span>
      </h1>
      <div className="grid grid-cols-4 gap-8 mx-[40px] mt-[80px]">
        {servicesArr.map((item, index) => (
          <div
            key={index}
            className="text-center p-[20px] bg-white rounded-2xl shadow-[8px_8px_15px_#d1d5db,-8px_-8px_16px_#ffffff]"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="mx-auto mb-4 h-10 w-10"
            />
            <h1 style={{ fontFamily: "FTHabitBold" }} className="mb-2 text-lg">
              {item.name}
            </h1>
            <p style={{ fontFamily: "FTHabitLight" }} className="text-sm">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
