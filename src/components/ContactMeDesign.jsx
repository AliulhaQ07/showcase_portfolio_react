import React from "react";

const ContactMeDesign = ({ Icon, text }) => {
  return (
    <>
      <div className="flex justify-start items-center bg-gray-600 rounded-lg p-2 gap-4 my-3 shadow">
        {/* Dynamic Icon */}
        {Icon && <Icon className="text-white text-2xl" />}{" "}
        {/* Larger icon size */}
        <div className="h-10 border-l-2 border-white"></div>{" "}
        {/* Taller and more defined border */}
        <p className="text-white text-md font-medium">{text}</p>{" "}
        {/* Increased text size and weight */}
      </div>
    </>
  );
};

export default ContactMeDesign;
