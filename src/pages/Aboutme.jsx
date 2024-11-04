import React from "react";
import AboutMeDesign from "../components/AboutMeDesign.jsx";
import profileimage from "../assets/images/profileimg.png";

const Aboutme = () => {
  return (
    <>
      <div className="min-h-screen  font-montserrat  flex items-center justify-center px-4 sm:px-8 py-8 ">

        <div className="max-w-full border rounded shadow-sm overflow-hidden h-auto p-4 sm:p-8">
          <AboutMeDesign
            mainHeading={"ALI UL HAQ "}
            subHeading={"WEB DEVELOPER & DESIGNER"}
            description={
              "I am a dedicated Web Developer with expertise in HTML, CSS, JavaScript, React, and modern frameworks like Bootstrap and Tailwind CSS. I specialize in creating responsive, user-focused websites and have strong experience in UI/UX design using Figma to craft intuitive digital experiences."
            }
            buttonText={"Contact me"}
            buttonLink={'/contact'}
            imageUrl={profileimage}
          />
        </div>
      </div>
    </>
  );
};

export default Aboutme;
