import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor on the portfolio site", () => {
	test("WHEN they use the navigation THEN they can move between all pages", async ({
		page,
		homePage,
		navigation,
		aboutPage,
		projectsPage,
	}) => {
		await test.step("GIVEN the visitor starts on the home page", async () => {
			await homePage.goto();
			await expect(homePage.heading).toBeVisible();
		});

		await test.step("WHEN they click the Projects link THEN the projects page is shown", async () => {
			await navigation.goToProjects();
			await expect(projectsPage.heading).toBeVisible();
			await expect(page).toHaveURL("/projects");
		});

		await test.step("WHEN they click the About link THEN the about page is shown", async () => {
			await navigation.goToAbout();
			await expect(aboutPage.heading).toBeVisible();
			await expect(page).toHaveURL("/about");
		});

		await test.step("WHEN they click the Home link THEN the home page is shown", async () => {
			await navigation.goHome();
			await expect(homePage.heading).toBeVisible();
			await expect(page).toHaveURL("/");
		});
	});
});
