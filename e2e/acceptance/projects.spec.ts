import { projects } from "#/constants/projects";
import { expect, test } from "../fixtures/test";

const expectedProjects = projects.map((project) => project.title);

test.describe("GIVEN a visitor on the projects page", () => {
	test("WHEN the page loads THEN project cards are displayed", async ({
		projectsPage,
	}) => {
		await test.step("GIVEN the visitor is on the projects page", async () => {
			await projectsPage.goto();
			await expect(projectsPage.heading).toBeVisible();
		});

		await test.step("THEN project cards are visible", async () => {
			await expect(projectsPage.projectCards).toHaveCount(
				expectedProjects.length,
			);
			for (const title of expectedProjects) {
				await expect(
					projectsPage.projectCards.getByText(title, { exact: true }),
				).toBeVisible();
			}
		});
	});
});
