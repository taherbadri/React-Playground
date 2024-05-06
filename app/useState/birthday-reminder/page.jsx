"use client";
import Card from "@/components/useState/birthday-remider/Card";
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
				<Card people={people} />
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
