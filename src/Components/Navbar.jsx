import { useState, useEffect, useRef } from "react";
import logo from "../assets/Images/LogoR.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const navRef = useRef(null);
  let prevScrollY = useRef(window.scrollY);

  useGSAP(() => {
    if (!navRef.current) return;

    gsap.from(navRef.current.children, {
      opacity: 0,
      y: 40,
      ease: "power3.inOut",
      stagger: 0.2,
      duration: 1,
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`rounded-full my-[10px] flex justify-between items-center left-1/2 -translate-x-1/2 p-[10px] min-w-[1200px] fixed top-0 z-50 backdrop-blur-md bg-white/40 border-b border-gray-400/30 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      ref={navRef}
      style={{ fontFamily: "FTHabitRegular" }}
    >
      <div className="flex justify-around w-1/2">
        <a href="#home" className="cursor-pointer">
          HOME
        </a>
        <a href="#products" className="cursor-pointer">
          PRODUCTS
        </a>
        <a href="#services" className="cursor-pointer">
          SERVICES
        </a>
      </div>
      <img src={logo} alt="" className="w-[50px]" />
      <ul className="flex justify-around w-1/2">
        <a href="#gallery" className="cursor-pointer">
          GALLERY
        </a>
        <a href="#about" className="cursor-pointer">
          ABOUT
        </a>
        <a href="#contact" className="cursor-pointer">
          CONTACT
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
