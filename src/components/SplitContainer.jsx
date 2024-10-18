import React from "react";

const SplitContainer = ({
  mainHeading = "Main Heading",
  subHeading = "Subheading",
  description = "This is a brief description of the content.",
  imageUrl = "https://via.placeholder.com/400",
  altText = "Sample image",
  buttonText = "Live Demo",
  buttonLink = "#",
}) => {
  return (
    <div className="flex flex-col md:flex-row h-full border p-8 m-8 ">
      {/* Left Side: Heading, Subheading, Description */}
      <div className="w-full md:w-1/2 p-6 text-white flex flex-col justify-center items-start mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          {mainHeading}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">
          {subHeading}
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 overflow-hidden text-ellipsis">
          {description}
        </p>
        {/* Button with dynamic link */}
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-sky-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          {buttonText}
        </a>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <img
          src={imageUrl}
          alt={altText}
          className="rounded-lg h-64 object-fill shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SplitContainer;
