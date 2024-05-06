"use client";

import Code from "@/components/Code";
import Title from "@/components/Title";
import React, { useState } from "react";

const data = [
	{ id: 1, name: "john" },
	{ id: 2, name: "jane" },
	{ id: 3, name: "susan" },
	{ id: 4, name: "peter" },
];

const UseStateArrayExample = () => {
	const [people, setPeople] = useState(data);

	const deletePerson = (id) => {
		const newArr = people.filter((person) => person.id !== id);
		setPeople(newArr);
	};

	return (
		<div>
			<Title title={"useState array example"} />
			<div className="example-div flex flex-col items-center justify-center gap-3">
				{people.map(({ id, name }) => {
					return (
						<article
							key={id}
							className="flex items-center justify-center flex-col gap-3 capitalize px-4"
						>
							<h2 className="text-3xl">{name}</h2>
							<button
								className="btn btn-sm btn-primary text-gray-100"
								onClick={() => {
									deletePerson(id);
								}}
							>
								delete
							</button>
						</article>
					);
				})}
				<div className="flex gap-2">
					<button
						className={`btn btn-error text-white mt-2 w-40 rounded-md ${
							people.length < 1 && "hidden"
						}`}
						onClick={() => {
							setPeople([]);
						}}
					>
						clear all
					</button>
					<button
						className={`btn btn-secondary text-white mt-2 w-40 rounded-md ${
							people.length > 0 && "hidden"
						}`}
						onClick={() => {
							setPeople(data);
						}}
					>
						refresh
					</button>
				</div>
			</div>
			<Code
				code={`const data = [
	{ id: 1, name: "john" },
	{ id: 2, name: "jane" },
	{ id: 3, name: "susan" },
	{ id: 4, name: "peter" },
];

    const [people, setPeople] = useState(data);

	const deletePerson = (id) => {
		const newArr = people.filter((person) => person.id !== id);
		setPeople(newArr);
	};

	return (
		<div>
			<div>
				{people.map(({ id, name }) => {
					return (
						<article
							key={id}>
							<h2>{name}</h2>
							<button
								onClick={() => {
									deletePerson(id);
								}}
							>
								delete
							</button>
						</article>
					);
				})}
				<div>
					<button
						onClick={() => {
							setPeople([]);
						}}
					>
						clear all
					</button>
					<button
						onClick={() => {
							setPeople(data);
						}}
					>
						refresh
					</button>
				</div>
			</div>`}
			/>
		</div>
	);
};

export default UseStateArrayExample;
