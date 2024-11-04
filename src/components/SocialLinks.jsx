import React from "react";

const SocialLinks = ({ Icon, Link }) => {
  return (
    <a href={Link} target="_blank" rel="noopener noreferrer">
      {Icon && (
        <Icon className="p-3 rounded shadow-sm flex items-center justify-center text-6xl border" />
      )}
    </a>
  );
};

export default SocialLinks;
