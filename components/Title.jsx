import React from "react";

const Title = ({ title }) => {
	return (
		<div className="mx-auto max-w-sm mb-12">
			<h4 className="capitalize text-3xl text-center mb-2">{title}</h4>
			<div className="h-1 max-w-32 mx-auto rounded-full bg-primary"></div>
		</div>
	);
};

export default Title;
