import { expect, test } from "../fixtures/test";

test.describe("GIVEN the production build", () => {
	test("WHEN the home page loads THEN it renders without runtime errors", async ({
		homePage,
	}) => {
		await homePage.goto();
		await expect(homePage.heading).toBeVisible();
	});

	test("WHEN the projects page loads THEN it renders without runtime errors", async ({
		projectsPage,
	}) => {
		await projectsPage.goto();
		await expect(projectsPage.heading).toBeVisible();
	});

	test("WHEN the about page loads THEN it renders without runtime errors", async ({
		aboutPage,
	}) => {
		await aboutPage.goto();
		await expect(aboutPage.heading).toBeVisible();
	});
});
