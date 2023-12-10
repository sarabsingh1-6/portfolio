import React from "react";
import AllProjects from "./allProjects";

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-5x-l sm:text-6xl md:text-9xl mb-8 text-opacity-100 text-primary font-bold">
        Projects
      </h1>
      <AllProjects />

    </section>
  );
};

export default ProjectSection;
