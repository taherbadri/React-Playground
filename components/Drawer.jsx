import Link from "next/link";
import React from "react";

const Drawer = ({ children }) => {
	return (
		<div className="drawer">
			<input id="drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<div className="w-full navbar bg-primary text-gray-200">
					<div className="flex-none lg:hidden">
						<label
							htmlFor="drawer"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-6 h-6 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="flex-1 px-2 mx-2 capitalize">
						<Link href={"/"} className="btn btn-ghost text-lg">
							react playground
						</Link>
					</div>
					<div className="flex-none hidden lg:block">
						<div className="dropdown dropdown-end">
							<div className="btn btn-ghost" tabIndex={0}>
								useState
							</div>
							<ul className="dropdown-content menu w-52 rounded-box p-2 mt-2 bg-base-300 text-gray-600">
								<li>
									<Link
										href={"/useState/birthday-reminder"}
										className="capitalize"
									>
										birthday reminder
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Page content here */}
				{children}
			</div>
			<div className="drawer-side">
				<label
					htmlFor="drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<aside className="p-4 w-3/4 min-h-full bg-primary">
					<div className="join join-vertical w-full text-gray-200">
						<div className="collapse collapse-arrow join-item bg-primary ">
							<input type="radio" name="drawer-menu-item" defaultChecked />
							<div className="collapse-title text-lg font-medium">useState</div>
							<div className="collapse-content">
								<ul className="menu menu-vertical">
									<li>
										<Link
											href={"/useState/birthday-reminder"}
											className="capitalize"
										>
											birthday reminder
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="collapse collapse-arrow join-item bg-primary ">
							<input type="radio" name="drawer-menu-item" />
							<div className="collapse-title text-lg font-medium">
								useEffect
							</div>
							<div className="collapse-content">
								<ul className="menu menu-vertical">
									<li>
										<Link className="capitalize" href={"/useEffect/"}>
											tours
										</Link>
									</li>
									<li>
										<Link className="capitalize" href={"/useEffect/"}>
											reviews
										</Link>
									</li>
									<li>
										<Link className="capitalize" href={"/useEffect/"}>
											questions
										</Link>
									</li>
									<li>
										<Link className="capitalize" href={"/useEffect/"}>
											menu
										</Link>
									</li>
									<li>
										<Link className="capitalize" href={"/useEffect/"}>
											tabs
										</Link>
									</li>
									<li>
										<Link className="capitalize" href={"/useEffect/"}>
											stripe menu
										</Link>
									</li>
									<li>
										<Link className="capitalize" href={"/useEffect/"}>
											slider
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="collapse collapse-arrow join-item bg-primary ">
							<input type="radio" name="drawer-menu-item" />
							<div className="collapse-title text-lg font-medium">useRef</div>
							<div className="collapse-content">
								<ul className="menu menu-vertical">
									<li>
										<Link className="capitalize" href={"/useRef/"}>
											navbar
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Drawer;
