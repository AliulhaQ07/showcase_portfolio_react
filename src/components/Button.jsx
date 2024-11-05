import React from "react";
import {motion} from "framer-motion";

const Button = ({text, onClick, downloadUrl}) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.05,
        rotate: [0, -5, 5, -3, 3, 0], // Increased rotation for a more noticeable shake
      }}
      transition={{
        type: "spring", // Smooth spring effect
        stiffness: 300, // Higher stiffness for quicker bounce-back
        damping: 6, // Lower damping for a livelier bounce
        duration: 0.4, // Slightly longer to make it noticeable
      }}
      href={downloadUrl ? downloadUrl : "#"}
      download={downloadUrl ? true : undefined}
      className="bg-gradient-to-br from-sky-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
      onClick={downloadUrl ? undefined : onClick}
    >
      {text}
    </motion.a>
  );
};

export default Button;
