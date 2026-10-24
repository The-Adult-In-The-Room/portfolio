import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor on the about page", () => {
	test("WHEN the page loads THEN external focus links have safe attributes", async ({
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

	test("WHEN they click external focus links THEN the about page stays open and the targets are reachable", async ({
		page,
		request,
		aboutPage,
	}) => {
		await test.step("GIVEN the visitor is on the about page", async () => {
			await aboutPage.goto();
			await expect(aboutPage.heading).toBeVisible();
		});

		await test.step("WHEN they click the Swiss Cheese Model link THEN the about page stays open and the article is reachable", async () => {
			await aboutPage.clickSwissCheeseLink();
			await expect(page).toHaveURL("/about");

			const response = await request.get(
				"https://www.semblanceoffunctionality.com/swiss-cheese/",
			);
			expect(response.ok()).toBe(true);
		});

		await test.step("WHEN they click the reusable workflows repository link THEN the about page stays open and the repo is reachable", async () => {
			await aboutPage.clickWorkflowsRepositoryLink();
			await expect(page).toHaveURL("/about");

			const response = await request.get(
				"https://github.com/The-Adult-In-The-Room/ci-workflows",
			);
			expect(response.ok()).toBe(true);
		});
	});
});
