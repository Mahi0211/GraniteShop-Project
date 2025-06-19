import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "../assets/Images/Logo-removebg.png";

export default function LogoIntro({ onComplete }) {
  const logoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.out" },
      onComplete,
    });

    tl.fromTo(
      logoRef.current,
      { rotateY: 90, opacity: 0, scale: 0.7 },
      { rotateY: 0, opacity: 1, scale: 1 }
    )
      .to(
        logoRef.current,
        {
          filter: "drop-shadow(0 0 10px rgba(0,0,0,0.4))",
          scale: 1.05,
          duration: 0.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
        },
        "-=0.4"
      )
      .to(logoRef.current, {
        scale: 1,
        filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
        duration: 0.3,
        ease: "power1.inOut",
      });
  }, [onComplete]);

  return (
    <div className="h-screen flex justify-center items-center bg-[#F3F4F6]">
      <img ref={logoRef} src={Logo} alt="logo" className="w-[500px]" />
    </div>
  );
}
