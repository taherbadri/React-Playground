"use client";
import Code from "@/components/Code";
import Title from "@/components/Title";
import React from "react";

const UseStateErrorExample = () => {
	let count = 0;

	const handleClick = () => {
		count = count + 1;
		console.log(count);
	};
	return (
		<div>
			<Title title={"useState error example"} />
			<div className="example-div flex flex-col items-center justify-center gap-3">
				<h2 className="text-3xl">{count}</h2>
				<button
					className="btn btn-sm btn-primary text-gray-100"
					onClick={() => {
						handleClick();
					}}
				>
					increase
				</button>
				<p className="text-lg">click the button and then check the console!!</p>
			</div>
			<Code
				code={`
    let count = 0;

    const handleClick = () => {
    count = count + 1;
    console.log(count); // see the count variable's value in the console
	};
	return (
		<div>
            <div>
                <h2>{count}</h2>
                <button onClick={() => {
                    handleClick();
                }}>
					increase
				</button>
            </div>
        </div>
            );`}
			/>
		</div>
	);
};

export default UseStateErrorExample;
