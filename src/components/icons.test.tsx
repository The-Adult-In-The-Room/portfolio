import { render } from "@testing-library/react";
import { GithubIcon, LinkedinIcon } from "./icons";

describe("GIVEN the icon components", () => {
	test("THEN GithubIcon renders with default size", () => {
		const { container } = render(<GithubIcon />);
		const svg = container.querySelector("svg");
		expect(svg).toHaveAttribute("width", "20");
		expect(svg).toHaveAttribute("height", "20");
	});

	test("THEN GithubIcon renders with custom size", () => {
		const { container } = render(<GithubIcon size={32} />);
		const svg = container.querySelector("svg");
		expect(svg).toHaveAttribute("width", "32");
		expect(svg).toHaveAttribute("height", "32");
	});

	test("THEN LinkedinIcon renders with default size", () => {
		const { container } = render(<LinkedinIcon />);
		const svg = container.querySelector("svg");
		expect(svg).toHaveAttribute("width", "20");
		expect(svg).toHaveAttribute("height", "20");
	});

	test("THEN LinkedinIcon renders with custom size", () => {
		const { container } = render(<LinkedinIcon size={24} />);
		const svg = container.querySelector("svg");
		expect(svg).toHaveAttribute("width", "24");
		expect(svg).toHaveAttribute("height", "24");
	});
});
