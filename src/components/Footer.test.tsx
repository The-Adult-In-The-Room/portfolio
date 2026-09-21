import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("GIVEN the Footer component", () => {
	test("THEN it renders the current year and name", () => {
		render(<Footer />);
		const currentYear = new Date().getFullYear().toString();

		expect(screen.getByText("Raymond")).toBeInTheDocument();
		expect(
			screen.getByText(`© ${currentYear} All rights reserved`),
		).toBeInTheDocument();
	});

	test("THEN it renders external social links", () => {
		render(<Footer />);

		expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
			"href",
			"https://github.com/The-Adult-In-The-Room",
		);
		expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/raymond-cox/",
		);
	});
});
