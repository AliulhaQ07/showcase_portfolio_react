import React from "react";
import ContactMeDesign from "../components/ContactMeDesign.jsx";
import { MdOutlineLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks.jsx";

const Contactme = () => {
  return (
    <>
      {/* Header Section */}
      <div className=" h-auto flex flex-col justify-center items-center md:flex-row font-montserrat border-b-2 gap-6 ">


        <div className="md:h-96 flex-1 flex justify-center items-center text-2xl md:text-4xl font-semibold border-e-0 md:border-e-2 p-2 ">
          <h1>GET IN TOUCH</h1>
        </div>


        <div className="md:h-96 flex-1 flex justify-start items-center text-lg sm:text-3xl font-semibold p-2 ">
          <h4>I AM BASED IN LAHORE, PAKISTAN</h4>
        </div>


      </div>


      {/* Contact Details Section */}

      <div className="  flex flex-col justify-center sm:flex sm:flex-row gap-4 py-10 px-4 border-b">
        <ContactMeDesign text="03167500934" icon={MdOutlineLocalPhone} />
        <ContactMeDesign text="MR.ALIULHAQ0711@GMAIL.COM" icon={MdEmail} />
        <ContactMeDesign text="LAHORE, PUNJAB, PAKISTAN" icon={MdLocationPin} />
      </div>



      {/* Social Links Section */}

      <div className = "flex  justify-center sm:flex sm:flex-row gap-4 py-10 px-4 border-b" >
        <SocialLinks Link = "https://github.com/AliulhaQ07" Icon = {FaGithub} />
        <SocialLinks Link = "https://www.linkedin.com/in/mraliulhaq/" Icon = {FaLinkedin} />
      </div >
    </>
  );
};

export default Contactme;
