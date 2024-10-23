import React from "react";
import ContactMeDesign from "../components/ContactMeDesign.jsx";
import { MdOutlineLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks.jsx";
import { FaGithub } from "react-icons/fa6";

const Contactme = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-montserrat text-white flex flex-col items-center justify-start px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-6 text-center">
        Contact Me
      </h1>

      {/* CONTACT DETAILS */}
      <div className="w-full sm:w-[80%] md:w-[40%] my-4 space-y-4">
        <ContactMeDesign text={"+923167500934"} Icon={MdOutlineLocalPhone} />
        <ContactMeDesign text={"MR.ALIULHAQ0711@GMAIL.COM"} Icon={MdEmail} />
        <ContactMeDesign
          text={"LAHORE PAKISTAN, PUNJAB"}
          Icon={MdLocationPin}
        />
      </div>

      {/* SOCIAL LINKS */}
      <div className="w-full sm:w-[80%] md:w-[40%] flex justify-center gap-4 my-4">
        <SocialLinks Link={"https://github.com/AliulhaQ07"} Icon={FaGithub} />
        <SocialLinks
          Link={"https://www.linkedin.com/in/mraliulhaq/"}
          Icon={FaLinkedin}
        />
      </div>
    </div>
  );
};

export default Contactme;
