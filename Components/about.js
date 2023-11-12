import React from "react";
import Image from "next/image";
// import bannerImage from "../assets/main_page_bg_rspack.webp";
import { SocialIcon } from "react-social-icons";
import myProfile from "../assets/myProfile.png";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const resumeURL = "http://localhost:3000/sarabjeet_CV.pdf";

const About = () => {
  const downloadResume = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <section id="about">
      <h1 className="text-5x-l sm:text-7xl md:text-9xl mb-8 text-opacity-100 text-primary font-bold">
        About
      </h1>
      <div className="overflow-hidde py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 flex justify-center items-center">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-">Hello</h2>
                <p className="mt-2 text-3xl font-bold tracking-tightm:text-4xl">
                  I'm Sarabjeet Singh
                </p>
                <p className="mt-6 text-lg leading-8 ">
                  Hi there! My name is sarabjeet singh and I'm a software
                  engineer with over 3 years of experience in the industry. I
                  love all things tech and coding.
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none"></dl>

                <div className="md:flex sm:block flex-row justify-between text-center">
                  <div className="sm:my-10 md:my-0">
                    <ul className="sm:flex sm:justify-center">
                      <li className="mr-5">
                        <SocialIcon
                          network="linkedin"
                          url="https://www.linkedin.com/in/sarabjeet-singh-852348163/"
                          target="_blank"
                        />
                      </li>
                      <li className="mr-5">
                        <SocialIcon
                          network="github"
                          url="https://github.com/sarabsingh1-6/"
                          target="_blank"
                        />
                      </li>
                    </ul>
                  </div>

                  <div>
                    {/* <button
                      class="animate-bounce font-bold py-2 px-4  inline-flex items-center rounded-3xl bg-blue-700"
                      onClick={() => {
                        downloadResume(resumeURL);
                      }}
                    >
                      <svg
                        class="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      <span>Download</span>
                    </button> */}

                    <div class="relative inline-flex  group">
                      <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        onClick={() => {
                          downloadResume(resumeURL);
                        }}
                        href="#"
                        title="Get quote now"
                        class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        Download Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image src={myProfile} width="100px" height="200px" alt="profile"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
