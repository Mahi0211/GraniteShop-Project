import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactUs from "./ContactUs";
import logo from "../assets/Images/Logo-removebg.png"

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;

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
    id="contact"
      className="mt-[100px]"
      style={{ fontFamily: "FTHabitRegular" }}
      ref={footerRef}
    >
      <ContactUs />
      <div className="mx-[40px] mt-[20px] bg-white px-6 py-4 text-black rounded-4xl shadow-2xl">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-[40px] border-b border-gray-300">
          <div>
            {/* <h2 className="text-xl font-semibold mb-4">Rudra Granites & Tiles</h2> */}
            <img src={logo} alt="" className="w-[150px] mb-[20px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)]" />
            <p className="text-sm opacity-70">
              Crafting timeless surfaces from nature's strength. Where every
              slab tells a story.
            </p>
            <div className="mt-[50px]">
              <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider">
                Get in Touch
              </h3>
              <p className="text-sm opacity-80">123 Stonecraft Ave, Chennai</p>
              <p className="text-sm opacity-80 mt-1">+91 98765 43210</p>
              <p className="text-sm opacity-80 mt-1">hello@graniteco.com</p>
            </div>
          </div>

          <div className="ml-[60px]">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider">
              Collections
            </h3>
            <ul className="space-y-1 text-sm opacity-80">
              <li>Kitchen</li>
              <li>Bathrooms</li>
              <li>Outdoor</li>
              <li>Custom Projects</li>
            </ul>
          </div>

          <div className="ml-[60px]">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-1 text-sm opacity-80">
              <li>About Us</li>
              <li>Gallery</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="ml-[60px]">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-1 text-sm opacity-80">
              <li>Promotion</li>
              <li>Information Center</li>
              <li>Testimonial</li>
            </ul>
          </div>
        </div>

        <div className="mt-[20px] text-center text-xs text-gray-500 flex justify-between px-[20px]">
          <div>Privacy Policy</div>
          <div>
            © {new Date().getFullYear()} Granite Elegance. All rights reserved.
          </div>
          <div>Terms of Use</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
