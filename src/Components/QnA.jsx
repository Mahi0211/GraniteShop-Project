import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "What makes granite ideal for kitchens?",
    content:
      "Granite is incredibly durable, scratch-resistant, and withstands high temperatures—perfect for countertops that get plenty of use.",
  },
  {
    title: "Is each granite slab unique?",
    content:
      "Yes! Every granite slab has its own natural pattern and mineral mix, giving each piece a distinct character.",
  },
  {
    title: "How do I maintain my granite surface?",
    content:
      "Wipe it with a pH-balanced cleaner and reseal annually to preserve its luster and protection.",
  },
  {
    title: "Can granite be used outdoors?",
    content:
      "Absolutely—its weather resistance and strength make it a great choice for outdoor kitchens, patios, or benches.",
  },
];

const QnA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const qnaRef = useRef(null);

  useEffect(() => {
    const el = qnaRef.current;

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

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return !items || items.length === 0 ? (
    "No items available."
  ) : (
    <div ref={qnaRef} className="w-full max-w-2xl mx-auto mt-[100px]">
      <h1
        style={{ fontFamily: "Benzin" }}
        className="text-center text-4xl mb-[60px]"
      >
        Your Question Answered
      </h1>
      {items.map((item, index) => (
        <div className="border-b border-gray-300 py-4" key={index}>
          <button
            onClick={() => handleClick(index)}
            className="flex justify-between w-full text-left text-lg font-medium focus:outline-none"
            style={{ fontFamily: "FTHabitMedium" }}
          >
            {item.title}
            <span style={{ fontFamily: "FTHabitRegular" }} className="text-3xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div
              style={{ fontFamily: "FTHabitRegular" }}
              className="mt-2 text-sm text-gray-700"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QnA;
