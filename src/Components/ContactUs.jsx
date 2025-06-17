import React from "react";
import image from "../assets/Images/Black-Granite.jpg";

const ContactUs = () => {
  return (
    <div className="px-[40px] relative">
      <img
        src={image}
        alt=""
        className="w-full h-[400px] object-cover rounded-4xl shadow-lg"
      />
      <div className="absolute inset-0 flex gap-[40px] flex-col items-center justify-center text-white text-center">
        <h1 style={{ fontFamily: "Benzin" }} className="text-3xl">Ready to connect with us?</h1>
        <p style={{ fontFamily: "FTHabitLight" }} className="w-1/2 text-gray-300">
          Join professionals who are transforming their ideas into impact—let’s
          build something incredible together
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-xl text-sm hover:bg-gray-200 transition-all cursor-pointer">
          Reach out now
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
