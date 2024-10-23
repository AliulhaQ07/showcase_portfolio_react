import React from "react";

const ContactMeDesign = ({ Icon, text }) => {
  return (
    <div className="flex items-center bg-gray-700 rounded-lg p-4 gap-4 my-4 shadow max-w-2xl mx-auto">
      {/* Dynamic Icon */}
      {Icon && (
        <Icon className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
      )}
      {/* Divider */}
      <div className="h-10 sm:h-12 border-l-2 border-white"></div>
      {/* Text */}
      <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-medium">
        {text}
      </p>
    </div>
  );
};

export default ContactMeDesign;
