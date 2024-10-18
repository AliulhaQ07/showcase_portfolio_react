import React from "react";
const ExperienceDivDesign = ({ text, imgUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        src={imgUrl}
        alt="img.."
        className="h-24 hover:-translate-y-1/4 duration-300 transition ease-in-out"
      />
      <div className="font-medium duration-200 ">{text}</div>
    </div>
  );
};

export default ExperienceDivDesign;
