import { Inter } from "next/font/google";
import "./globals.css";
import Drawer from "@/components/Drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My React Playground",
	description: `This space is dedicated to my
				journey with React, where I share a variety of projects that I have
				created while learning and exploring this powerful JavaScript library.`,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="nord">
			<body className={`${inter.className} "antialiased"`}>
				<Drawer>
					<div className="lg:px-12 px-10 mt-12">{children}</div>
				</Drawer>
			</body>
		</html>
	);
}
