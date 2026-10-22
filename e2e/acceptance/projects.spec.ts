import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor on the projects page", () => {
	test("WHEN the page loads THEN project cards are displayed", async ({
		projectsPage,
	}) => {
		await test.step("GIVEN the visitor is on the projects page", async () => {
			await projectsPage.goto();
			await expect(projectsPage.heading).toBeVisible();
		});

		await test.step("THEN project cards are visible", async () => {
			await expect(projectsPage.projectCards.first()).toBeVisible();
			await expect(
				projectsPage.projectCards.getByText("POE2 Tools"),
			).toBeVisible();
		});
	});
});
