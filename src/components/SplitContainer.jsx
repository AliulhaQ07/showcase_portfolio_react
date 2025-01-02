import React from "react";
import PropTypes from "prop-types";

const SplitContainer = ({
							mainHeading,
							subHeading,
							description,
							imageUrl,
							altText,
							buttonText,
							buttonLink,
						}) => {
	return (
		<article className="flex flex-col md:flex-row h-auto border m-2">
			{/* Left Side: Heading, Subheading, Description */}
			<div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-start mx-auto">
				<header>
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
						{mainHeading}
					</h1>
					<h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">
						{subHeading}
					</h2>
				</header>
				<p className="text-sm sm:text-base md:text-lg mb-6 overflow-hidden text-ellipsis">
					{description}
				</p>
				{/* Button with dynamic link */}
				<a
					href={buttonLink}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-gradient-to-br from-sky-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
					aria-label={`Link to ${mainHeading} demo`}
				>
					{buttonText}
				</a>
			</div>

			{/* Right Side: Image */}
			<div className="w-full md:w-1/2 p-4 flex justify-center items-center">
				<img
					src={imageUrl}
					alt={altText}
					className="w-full border sm:w-auto h-auto max-h-96 sm:max-h-[18rem] md:max-h-[22rem] lg:max-h-[28rem] rounded object-cover shadow-sm hover:shadow-2xl hover:-translate-y-4 transform transition duration-300 ease-in-out"
				/>
			</div>
		</article>
	);
};

SplitContainer.propTypes = {
	mainHeading: PropTypes.string,
	subHeading: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
	altText: PropTypes.string,
	buttonText: PropTypes.string,
	buttonLink: PropTypes.string,
};

SplitContainer.defaultProps = {
	mainHeading: "Main Heading",
	subHeading: "Subheading",
	description: "This is a brief description of the content.",
	imageUrl: "https://via.placeholder.com/400",
	altText: "Sample image",
	buttonText: "Live Demo",
	buttonLink: "#",
};

export default SplitContainer;