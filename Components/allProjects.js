import React from "react";
import Image from "next/image";
import weather from "../assets/weather.jpg";

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
                  WebApp
                </span>
                <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  {/* 2 baths &bull; 3 rooms */}
                </div>
              </div>

              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                Weather Forecast
              </h4>

              <div class="mt-1">
                {/* $1800
                <span class="text-gray-600 text-sm"> /wk</span> */}
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span class="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>

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
                  WebApp
                </span>
                <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  {/* 2 baths &bull; 3 rooms */}
                </div>
              </div>

              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                Weather Forecast
              </h4>

              <div class="mt-1">
                {/* $1800
                <span class="text-gray-600 text-sm"> /wk</span> */}
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span class="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-span-6 sm:col-span-12">
        <article className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4  ">
          <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] "></div>
          <a>
            <Image
              src={bannerImage}
              width="100px"
              height="200px"
              alt="bannerImage"
            />
          </a>
          <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
            <span>ydydy</span>
            <p> fhfhfhf </p>
          </div>
        </article>
      </div>

      <div className="col-span-6 sm:col-span-12">
        <article className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4  ">
          <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] "></div>
          <a>
            <Image
              src={bannerImage}
              width="100px"
              height="200px"
              alt="bannerImage"
            />
          </a>
          <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
            <span>ydydy</span>
            <p> fhfhfhf </p>
          </div>
        </article>
      </div> */}
    </div>
  );
}

export default AllProjects;
