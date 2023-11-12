import Image from "next/image";
import bannerImage from "../assets/main_page_bg_rspack.webp";
import { Particle } from "./particle";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:py-6">
      <Particle />
      <div className="flex sm:block md:flex">
        <div className="flex-auto w-32 sm:w-auto sm:text-center md:text-left md:flex-auto flex justify-center flex-col">
          <span className="text-5xl font-extrabold">Hello</span>
          <h1 className="text-4xl mt-4 mb-4">I'm Sarabjeet Singh</h1>
          <h2 className="text-4xl">Fullstack Developer</h2>
          <p></p>
        </div>
        <div className="flex-auto w-64 sm:w-80 m-auto">
          <Image src={bannerImage} width="100px" height="200px" alt="bannerImage"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
