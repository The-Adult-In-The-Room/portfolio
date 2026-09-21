import { render } from "@testing-library/react";
import { Separator } from "./separator";

describe("GIVEN the Separator component", () => {
	test("THEN it renders horizontally by default", () => {
		const { container } = render(<Separator />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).toHaveAttribute("data-orientation", "horizontal");
		expect(separator).toHaveAttribute("role", "none");
	});

	test("THEN it renders vertically", () => {
		const { container } = render(<Separator orientation="vertical" />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).toHaveAttribute("data-orientation", "vertical");
	});

	test("THEN it accepts custom classes", () => {
		const { container } = render(<Separator className="custom-class" />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).toHaveClass("custom-class");
	});
});
