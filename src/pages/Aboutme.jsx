import React from "react";
import AboutMeDesign from "../components/AboutMeDesign.jsx";
import profileimage from "../assets/images/profileimg.png";

const Aboutme = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 font-montserrat text-white flex items-start justify-center px-4 sm:px-8 py-8">
        <div className="max-w-6xl w-full bg-gray-700 rounded-2xl overflow-hidden">
          <AboutMeDesign
            mainHeading={"ALI UL HAQ "}
            subHeading={"WEB DEVELOPER & DESIGNER"}
            description={
              "I am a dedicated Web Developer with expertise in HTML, CSS, JavaScript, React, and modern frameworks like Bootstrap and Tailwind CSS. I specialize in creating responsive, user-focused websites and have strong experience in UI/UX design using Figma to craft intuitive digital experiences."
            }
            buttonText={"Contact me"}
            imageUrl={profileimage}
          />
        </div>
      </div>
    </>
  );
};

export default Aboutme;
