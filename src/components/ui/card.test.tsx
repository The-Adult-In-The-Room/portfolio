import { render, screen } from "@testing-library/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

describe("GIVEN the Card component family", () => {
	test("THEN it renders a complete card", () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>Title</CardTitle>
					<CardDescription>Description</CardDescription>
				</CardHeader>
				<CardContent>Content</CardContent>
				<CardFooter>Footer</CardFooter>
			</Card>,
		);

		expect(screen.getByText("Title")).toBeInTheDocument();
		expect(screen.getByText("Description")).toBeInTheDocument();
		expect(screen.getByText("Content")).toBeInTheDocument();
		expect(screen.getByText("Footer")).toBeInTheDocument();
	});

	test("THEN each part accepts custom classes", () => {
		render(
			<Card className="card-class">
				<CardHeader className="header-class">
					<CardTitle className="title-class">Title</CardTitle>
					<CardDescription className="description-class">
						Description
					</CardDescription>
				</CardHeader>
				<CardContent className="content-class">Content</CardContent>
				<CardFooter className="footer-class">Footer</CardFooter>
			</Card>,
		);

		expect(screen.getByText("Title").parentElement).toHaveClass("header-class");
		expect(screen.getByText("Title")).toHaveClass("title-class");
		expect(screen.getByText("Description")).toHaveClass("description-class");
		expect(screen.getByText("Content")).toHaveClass("content-class");
		expect(screen.getByText("Footer")).toHaveClass("footer-class");
	});
});
