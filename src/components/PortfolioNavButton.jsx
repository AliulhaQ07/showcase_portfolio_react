import React from "react";

const PortfolioNavButton = ({
  text = "Button",
  bgColor = "bg-violet-700",
  hoverColor = "hover:bg-violet-500",
  textColor = "text-white",
  activeBgColor = "bg-white", // Active background color
  activeTextColor = "text-violet-700", // Active text color
  isActive = false, // New prop to determine if the button is active
  padding = "p-3",
  rounded = "rounded",
  border = "border-2",
  transition = "transition duration-300",
  onClick,
}) => {
  return (
    <button
      className={`${isActive ? `${activeBgColor} ${activeTextColor} ${border}` : `${bgColor} ${textColor} `}
      ${padding} ${rounded} ${hoverColor} ${transition}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PortfolioNavButton;
