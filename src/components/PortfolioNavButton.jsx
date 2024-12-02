import React from "react";
import PropTypes from 'prop-types';

const PortfolioNavButton = ({
								text = "Button",
								bgColor = "bg-primary",
								hoverColor = "hover:bg-primary-dark-1",
								textColor = "text-white",
								activeBgColor = "bg-white",
								activeTextColor = "text-gray-700",
								isActive = false,
								padding = "p-3",
								rounded = "rounded",
								border = "border-2",
								transition = "transition duration-300",
								onClick,
							}) => {
	return (
		<button
			className={`${
				isActive
					? `${activeBgColor} ${activeTextColor} ${border}`
					: `${bgColor} ${textColor} ${hoverColor}`
			} ${padding} ${rounded} ${transition}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

PortfolioNavButton.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	hoverColor: PropTypes.string,
	textColor: PropTypes.string,
	activeBgColor: PropTypes.string,
	activeTextColor: PropTypes.string,
	isActive: PropTypes.bool,
	padding: PropTypes.string,
	rounded: PropTypes.string,
	border: PropTypes.string,
	transition: PropTypes.string,
	onClick: PropTypes.func,
};

export default PortfolioNavButton;