import React from "react";
import Image from "next/image";
import weather from "../assets/weather.jpg";
import passwordGenerator from "../assets/passwordGenerator.webp";

function AllProjects() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sm:py-6">
      <div class="wrapper gird h-screen place-items-center antialiased text-gray-900 flex justify-evenly">
        <div>
          <Image
            src={weather}
            alt=" random imgee"
            class="h-52 w-fit object-cover object-center rounded-lg shadow-md"
          />
          <div class="relative px-4 -mt-16  w-fit">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Website
                </span>
              </div>

              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                <a href="https://weatherforecastapplicationreact.netlify.app/" target="__blank">Weather Forecast</a>
                
              </h4>

              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  {/* 4/5 ratings{" "} */}
                </span>
                <span class="text-sm text-gray-600">
                  {/* (based on 234 ratings) */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={passwordGenerator}
            alt="password"
            class="h-52 w-fit object-cover object-center rounded-lg shadow-md"
          />
          <div class="relative px-4 -mt-16  w-fit">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  WebApp
                </span>
              </div>

              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                <a href="https://reactpasswordgenerator.web.app/" target="__blank">Password Generator</a>
              </h4>

              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  {/* 4/5 ratings{" "} */}
                </span>
                <span class="text-sm text-gray-600">
                  {/* (based on 234 ratings) */}
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AllProjects;
