"use client";

import Code from "@/components/Code";
import Title from "@/components/Title";
import React, { useState } from "react";

const UseStateBasics = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<Title title={"useState basics"} />
			<div className="example-div flex flex-col items-center justify-center gap-3">
				<h2 className="text-3xl">you clicked {count} times!</h2>
				<button
					className="btn btn-sm btn-primary text-gray-100"
					onClick={() => {
						handleClick();
					}}
				>
					increase
				</button>
			</div>
			<Code
				code={`const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<div>
				<h2>you clicked {count} times!</h2>
				<button
					onClick={() => {
						handleClick();
					}}
				>
					increase
				</button>
			</div>`}
			/>
		</div>
	);
};

export default UseStateBasics;
