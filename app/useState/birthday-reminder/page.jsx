"use client";
import data from "@/utils/data";
import React, { useState } from "react";

const BirthdayReminder = () => {
	const [people, setPeople] = useState(data);

	const clearAll = () => {
		setPeople([]);
	};

	return (
		<div>
			<section className="max-w-md mx-auto flex flex-col items-center justify-center gap-4 shadow rounded-xl mb-4 p-4">
				<h3 className="text-2xl my-4">{people.length} birthdays today</h3>
				{people.map((person) => {
					return (
						<article
							key={person.id}
							className="card card-bordered w-full shadow-sm card-side"
						>
							<figure className="avatar">
								<div className="w-24">
									<img src={person.image} alt={person.name} />
								</div>
							</figure>
							<div className="card-body">
								<h2 className="card-title">{person.name}</h2>
								<p>{person.age} years old</p>
							</div>
						</article>
					);
				})}
				{people.length < 1 ? (
					<button
						className="btn btn-block btn-primary"
						onClick={() => setPeople(data)}
					>
						Refresh
					</button>
				) : (
					<button className="btn btn-block btn-primary" onClick={clearAll}>
						Clear all
					</button>
				)}
			</section>
		</div>
	);
};

export default BirthdayReminder;
