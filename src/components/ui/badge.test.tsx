import { render, screen } from "@testing-library/react";
import { Badge, badgeVariants } from "./badge";

describe("GIVEN the Badge component", () => {
	test("THEN it renders with default variant", () => {
		render(<Badge>Default</Badge>);
		expect(screen.getByText("Default")).toBeInTheDocument();
	});

	test("THEN it renders each variant", () => {
		const { rerender } = render(<Badge variant="secondary">Secondary</Badge>);
		expect(screen.getByText("Secondary")).toBeInTheDocument();

		rerender(<Badge variant="accent">Accent</Badge>);
		expect(screen.getByText("Accent")).toBeInTheDocument();

		rerender(<Badge variant="outline">Outline</Badge>);
		expect(screen.getByText("Outline")).toBeInTheDocument();
	});

	test("THEN it accepts custom classes", () => {
		render(<Badge className="custom-class">Custom</Badge>);
		expect(screen.getByText("Custom")).toHaveClass("custom-class");
	});

	test("THEN badgeVariants exposes variant classes", () => {
		expect(badgeVariants({ variant: "accent" })).toContain(
			"bg-[rgba(79,184,178,0.12)]",
		);
	});
});
