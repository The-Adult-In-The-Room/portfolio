import { render, screen } from "@testing-library/react";
import { Button, buttonVariants } from "./button";

describe("GIVEN the Button component", () => {
	test("THEN it renders with default variant and size", () => {
		render(<Button>Click me</Button>);
		expect(
			screen.getByRole("button", { name: "Click me" }),
		).toBeInTheDocument();
	});

	test("THEN it renders each variant", () => {
		const { rerender } = render(<Button variant="secondary">Secondary</Button>);
		expect(
			screen.getByRole("button", { name: "Secondary" }),
		).toBeInTheDocument();

		rerender(<Button variant="outline">Outline</Button>);
		expect(screen.getByRole("button", { name: "Outline" })).toBeInTheDocument();

		rerender(<Button variant="ghost">Ghost</Button>);
		expect(screen.getByRole("button", { name: "Ghost" })).toBeInTheDocument();

		rerender(<Button variant="link">Link</Button>);
		expect(screen.getByRole("button", { name: "Link" })).toBeInTheDocument();
	});

	test("THEN it renders each size", () => {
		const { rerender } = render(<Button size="sm">Small</Button>);
		expect(screen.getByRole("button", { name: "Small" })).toBeInTheDocument();

		rerender(<Button size="lg">Large</Button>);
		expect(screen.getByRole("button", { name: "Large" })).toBeInTheDocument();

		rerender(<Button size="icon">Icon</Button>);
		expect(screen.getByRole("button", { name: "Icon" })).toBeInTheDocument();
	});

	test("THEN it renders as a child element via asChild", () => {
		render(
			<Button asChild>
				<a href="/">Link button</a>
			</Button>,
		);
		expect(
			screen.getByRole("link", { name: "Link button" }),
		).toBeInTheDocument();
	});

	test("THEN it accepts custom classes", () => {
		render(<Button className="custom-class">Custom</Button>);
		expect(screen.getByRole("button", { name: "Custom" })).toHaveClass(
			"custom-class",
		);
	});

	test("THEN buttonVariants exposes variant classes", () => {
		expect(buttonVariants({ variant: "default" })).toContain(
			"bg-[rgba(79,184,178,0.14)]",
		);
	});
});
