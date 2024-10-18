import React from "react";

const Button = ({ text, onClick, downloadUrl }) => {
  return (
    <a
      href={downloadUrl ? downloadUrl : "#"}
      download={downloadUrl ? true : undefined}
      className="bg-gradient-to-br from-sky-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
      onClick={downloadUrl ? undefined : onClick}
    >
      {text}
    </a>
  );
};

export default Button;
