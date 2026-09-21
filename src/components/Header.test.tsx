import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import Header from "./Header";

vi.mock("@tanstack/react-router", async () => {
	const actual = await vi.importActual<object>("@tanstack/react-router");
	return {
		...actual,
		Link: ({ to, children, ...props }: { to: string; children: ReactNode }) => (
			<a href={to} {...props}>
				{children}
			</a>
		),
	};
});

describe("GIVEN the Header component", () => {
	test("THEN it renders navigation links", () => {
		render(<Header />);

		expect(screen.getByRole("link", { name: "Raymond" })).toHaveAttribute(
			"href",
			"/",
		);
		expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
			"href",
			"/",
		);
		expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
			"href",
			"/projects",
		);
		expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
			"href",
			"/about",
		);
	});

	test("THEN it renders external social links", () => {
		render(<Header />);

		expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
			"href",
			"https://github.com/The-Adult-In-The-Room",
		);
		expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/raymond-cox/",
		);
	});

	test("THEN it renders the theme toggle", () => {
		render(<Header />);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});
});
