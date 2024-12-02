import React from "react";

const AboutMeDesign = ({
						   mainHeading = "Main Heading",
						   subHeading = "Subheading",
						   description = "This is a brief description of the content.",
						   imageUrl = "https://via.placeholder.com/400",
						   altText = "Sample image",
						   buttonText = "Live Demo",
						   buttonLink = "#",
					   }) => {
	return (
		<div className="flex flex-col md:flex-row h-full w-full p-2 md:px-2 gap-4 ">
			{/* Left Side: Heading, Subheading, Description */}
			<div className="w-full md:w-1/2 flex flex-col justify-center items-start">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
					{mainHeading}
				</h1>
				<h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">
					{subHeading}
				</h2>
				<p className="text-sm sm:text-base md:text-lg mb-6">{description}</p>
				{/* Button with dynamic link */}
				<a
					href={buttonLink}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-gradient-to-br from-sky-500 to-purple-500  text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
				>
					{buttonText}
				</a>
			</div>

			{/* Right Side: Image */}
			<div className="w-full md:w-1/2 flex justify-center items-center">
				<img
					src={imageUrl}
					alt={altText}
					className="rounded  w-full h-96 sm:w-3/4 object-contain  my-2"
				/>
			</div>
		</div>
	);
};

export default AboutMeDesign;
