import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor on the about page", () => {
	test("WHEN the page loads THEN external focus links are visible and safe", async ({
		aboutPage,
	}) => {
		await test.step("GIVEN the visitor is on the about page", async () => {
			await aboutPage.goto();
			await expect(aboutPage.heading).toBeVisible();
		});

		await test.step("THEN the Swiss Cheese Model link opens in a new tab", async () => {
			await expect(aboutPage.swissCheeseLink).toBeVisible();
			await expect(aboutPage.swissCheeseLink).toHaveAttribute(
				"href",
				"https://www.semblanceoffunctionality.com/swiss-cheese/",
			);
			await expect(aboutPage.swissCheeseLink).toHaveAttribute(
				"target",
				"_blank",
			);
			await expect(aboutPage.swissCheeseLink).toHaveAttribute(
				"rel",
				"noopener",
			);
		});

		await test.step("THEN the reusable workflows repository link opens in a new tab", async () => {
			await expect(aboutPage.workflowsRepositoryLink).toBeVisible();
			await expect(aboutPage.workflowsRepositoryLink).toHaveAttribute(
				"href",
				"https://github.com/The-Adult-In-The-Room/ci-workflows",
			);
			await expect(aboutPage.workflowsRepositoryLink).toHaveAttribute(
				"target",
				"_blank",
			);
			await expect(aboutPage.workflowsRepositoryLink).toHaveAttribute(
				"rel",
				"noopener",
			);
		});
	});
});
