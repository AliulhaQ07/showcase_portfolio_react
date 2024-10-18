import React from "react";
import { FaFacebook } from "react-icons/fa";

const SocialLinks = ({ Icon, Link }) => {
  return (
    <>
      <div className="h-16 w-16 bg-gray-900 rounded flex items-center justify-center text-4xl ">
        <a href={Link} target={"_blank"}>
          {Icon && <Icon className="text-white text-4xl" />}
        </a>
      </div>
    </>
  );
};
export default SocialLinks;
