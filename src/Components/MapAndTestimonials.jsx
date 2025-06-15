import React from "react";
import stone1 from "../assets/Images/stone2.jpg"

const MapAndTestimonials = () => {
  return (
    <div className="mx-[40px] mt-[100px]">
      <div className="w-full h-[400px] overflow-hidden">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.638355808358!2d80.1990727074324!3d13.006684787943135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267709aa40a7d%3A0xca348695fc512750!2sGuindy%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1749994995034!5m2!1sen!2sin"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full flex">
        <div className="w-1/3">
          <div className="p-[10px]">
            <h1>Location</h1>
            <p>
              51, Ganapathy Nagar, 150 Feet, Velachery Bypass Rd, Chennai, Tamil
              Nadu 600042
            </p>
          </div>
        </div>
        <div className="w-1/3">
          <img src={stone1} alt="" className="w-[400px] h-[300px] object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default MapAndTestimonials;
