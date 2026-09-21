import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("GIVEN the Tabs component family", () => {
	function setup() {
		return render(
			<Tabs defaultValue="one">
				<TabsList>
					<TabsTrigger value="one">One</TabsTrigger>
					<TabsTrigger value="two">Two</TabsTrigger>
				</TabsList>
				<TabsContent value="one">Content one</TabsContent>
				<TabsContent value="two">Content two</TabsContent>
			</Tabs>,
		);
	}

	test("THEN it renders tabs and shows default content", () => {
		setup();
		expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute(
			"data-state",
			"active",
		);
		expect(screen.getByText("Content one")).toBeInTheDocument();
	});

	test("THEN it switches content when a tab is clicked", async () => {
		setup();
		await userEvent.click(screen.getByRole("tab", { name: "Two" }));

		expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
			"data-state",
			"active",
		);
		expect(screen.getByText("Content two")).toBeInTheDocument();
	});

	test("THEN each part accepts custom classes", () => {
		const { container } = render(
			<Tabs defaultValue="one" className="tabs-class">
				<TabsList className="list-class">
					<TabsTrigger value="one" className="trigger-class">
						One
					</TabsTrigger>
				</TabsList>
				<TabsContent value="one" className="content-class">
					Content
				</TabsContent>
			</Tabs>,
		);

		expect(container.querySelector("[data-slot='tabs']")).toHaveClass(
			"tabs-class",
		);
		expect(container.querySelector("[data-slot='tabs-list']")).toHaveClass(
			"list-class",
		);
		expect(container.querySelector("[data-slot='tabs-trigger']")).toHaveClass(
			"trigger-class",
		);
		expect(container.querySelector("[data-slot='tabs-content']")).toHaveClass(
			"content-class",
		);
	});
});
