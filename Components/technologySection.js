import React from "react";
import Technologies from "./tech";

const TechnologySection = () => {
  return (
    <section id="technology">
      <h1 className="text-5x-l sm:text-6xl md:text-9xl mb-8 text-opacity-100 text-primary font-bold">
        Technology
      </h1>

      <Technologies />
    </section>
  );
};

export default TechnologySection;
