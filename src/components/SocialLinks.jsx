import React from "react";
import { FaFacebook } from "react-icons/fa";

const SocialLinks = ({ Icon, Link }) => {
  return (
    <>
      <div className="p-6  bg-gray-700 rounded flex items-center justify-start text-4xl gap-4 ">
        <a href={Link} target={"_blank"}>
          {Icon && <Icon className="text-white text-3xl" />}
        </a>
      </div>
    </>
  );
};
export default SocialLinks;
