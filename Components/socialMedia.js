import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLinkedinIn,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import linkedin from "../assets/linkedin.png";

const SocialIcons = ({ title }) => {
  return (
    <div className="text-center">
      <h2 className="mt-2 text-3xl font-bold tracking-tightm:text-4xl text-center">
        {title}
      </h2>

      <ul className="flex justify-center items-center">
        <li className="m-16 relative group">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#3b60c4" }}
            size="2xl"
          />
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="m-16 relative group">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#075E54" }}
            size="2xl"
          />
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="m-16 relative group">
          <Image src={linkedin} />
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
        </li>

        {/* <p className="m-16 relative group">
          <span>Hover over me</span>
          <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
        </p> */}
      </ul>
    </div>
  );
};

export default SocialIcons;
