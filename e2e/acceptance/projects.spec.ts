import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor on the projects page", () => {
	test("WHEN they select a category tab THEN only matching projects are shown", async ({
		projectsPage,
	}) => {
		await test.step("GIVEN the visitor is on the projects page", async () => {
			await projectsPage.goto();
			await expect(projectsPage.heading).toBeVisible();
			await expect(projectsPage.projectCards).toHaveCount(5);
		});

		await test.step("WHEN they filter to Full Stack THEN only full-stack projects are shown", async () => {
			await projectsPage.filterByCategory("Full Stack");
			await expect(projectsPage.projectCards).toHaveCount(1);
			await expect(
				projectsPage.projectCards.getByText("Lorebrary"),
			).toBeVisible();
		});

		await test.step("WHEN they filter to Frontend THEN only frontend projects are shown", async () => {
			await projectsPage.filterByCategory("Frontend");
			await expect(projectsPage.projectCards).toHaveCount(2);
		});

		await test.step("WHEN they filter to Tools THEN only tools projects are shown", async () => {
			await projectsPage.filterByCategory("Tools");
			await expect(projectsPage.projectCards).toHaveCount(1);
			await expect(
				projectsPage.projectCards.getByText("POE2 Tools"),
			).toBeVisible();
		});
	});
});
