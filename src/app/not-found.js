import React from "react";
import Image from "next/image";
// import bear404 from "/assets/bear404.png";
// import dog404 from "/assets/dog404.jpg";
// import panda404 from "/assets/panda404.jpg";
import gif404 from "/assets/404gif.gif";

const NotFound = () => {
  //   // Array of image paths
  //   const images = [
  //     bear404,
  //     dog404,
  //     panda404,
  //   ];

  //   // Get a random index to select a random image
  //   const randomIndex = Math.floor(Math.random() * images.length);

  //   // Get the random image path
  //   const randomImagePath = images[randomIndex];

  return (
    <div className="bg-white h-screen md:relative">
      {/* <h1>404 - Page Not Found </h1> */}
      {/* Display the random image */}
      {/* <Image src={randomImagePath} alt="Random Image" className="object-contain h-screen" /> */}
      <h1 className="text-6xl md:absolute md:top-[100px] md:left-[45%] text-black font-semibold text-center">
        {" "}
        404{" "}
      </h1>
      <Image src={gif404} alt="Random Image" className="m-auto" />
      <h3 className="text-black text-center text-2xl">Look like you're lost</h3>
      <span className="text-black text-center block">
        the page you are looking for not avaible!
      </span>
      {/* <a href="/" >Go to Home </a> */}
      <div class="flex items-center justify-center mt-5">
        <div class="relative inline-flex group">
          <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="/"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
