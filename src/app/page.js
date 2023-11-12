"use client";
import Navbar from "../../Components/navbar";
import Banner from "../../Components/banner";
import TechnologySection from "../../Components/technologySection";
import About from "../../Components/about";
import Footer from "../../Components/footer";
import Contact from "../../Components/contact";
import ProjectSection from "../../Components/project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <TechnologySection />
      <ProjectSection />
      <About />
      <Contact />
      <Footer />
      {/* <div className="text-primary">Priorities</div> */}
    </>
  );
}
