import React from "react";
import ContactMeDesign from "../components/ContactMeDesign.jsx";
import { MdOutlineLocalPhone, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks.jsx";
import { FaGithub } from "react-icons/fa6";

const Contactme = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 font-montserrat text-white flex flex-col items-center justify-start p-4 sm:px-8 py-8">
        <h1 className="text-2xl my-4 mb-6">CONTACT ME</h1>
        <div className="max-w-4xl w-full bg-gray-700 rounded-2xl shadow-lg p-8">
          {/* Phone Contact */}
          <ContactMeDesign text="03167500934" Icon={MdOutlineLocalPhone} />

          {/* Email Contact */}
          <ContactMeDesign Icon={MdEmail} text="mr.aliulhaq0711@gmail.com" />

          {/* Address Contact */}
          <ContactMeDesign
            Icon={IoLocationSharp}
            text="WAPDA TOWN, PHASE-1, LAHORE, PUNJAB, PAKISTAN"
          />

          <div className="h-24 w-full bg-gray-600 rounded flex justify-start items-center p-4 gap-3">
            <SocialLinks
              Icon={FaLinkedin}
              Link={"https://www.linkedin.com/in/mraliulhaq/"}
            />
            <SocialLinks
              Icon={FaGithub}
              Link={"https://github.com/AliulhaQ07"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
