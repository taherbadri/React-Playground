import React from "react";

const Card = ({ people }) => {
	return (
		<>
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
		</>
	);
};

export default Card;
