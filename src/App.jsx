import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import Services from "./Components/Services";
import Collection from "./Components/Collection";
import QnA from "./Components/QnA";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
// import MapAndTestimonials from "./Components/MapAndTestimonials";

const App = () => {
  return (
    <main className="bg-[#F3F4F6]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Product />
      <Services />
      <Collection />
      <QnA />
      {/* <MapAndTestimonials /> */}
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
