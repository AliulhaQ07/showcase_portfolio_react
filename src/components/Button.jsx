import React from "react";
import {motion} from "framer-motion";

const Button = ({text, onClick, downloadUrl}) => {
	return (
		<a
			href={downloadUrl ? downloadUrl : "#"}
			download={downloadUrl ? true : undefined}
			className="border border-primary  px-4 py-2 rounded-lg hover:cursor-pointer"
			onClick={downloadUrl ? undefined : onClick}
		>
			{text}
		</a>
	);
};

export default Button;
