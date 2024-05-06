import React from "react";

const Code = ({ code }) => {
	return (
		<div className="code-div mockup-code bg-primary text-gray-200 my-4 max-w-xl mx-auto">
			<pre>
				<code>{`${code}`}</code>
			</pre>
		</div>
	);
};

export default Code;
