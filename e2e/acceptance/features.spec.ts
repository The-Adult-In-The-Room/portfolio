import { features } from "#/constants/features";
import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor on the home page", () => {
	test("WHEN the page loads THEN the Featured In section lists each feature", async ({
		homePage,
	}) => {
		await test.step("GIVEN the visitor is on the home page", async () => {
			await homePage.goto();
			await expect(homePage.heading).toBeVisible();
		});

		await test.step("THEN the Featured In section is visible", async () => {
			await expect(homePage.featuredHeading).toBeVisible();
		});

		await test.step("THEN each feature links to its publication", async () => {
			for (const feature of features) {
				const link = homePage.featureLink(feature.publication);
				await expect(link).toBeVisible();
				await expect(link).toHaveAttribute("href", feature.publicationUrl);
			}
		});
	});
});

test.describe("GIVEN a visitor on the projects page", () => {
	test("WHEN a project is featured THEN its card links to the publication", async ({
		projectsPage,
	}) => {
		await test.step("GIVEN the visitor is on the projects page", async () => {
			await projectsPage.goto();
			await expect(projectsPage.heading).toBeVisible();
		});

		await test.step("THEN each featured project card links to its publication", async () => {
			for (const feature of features) {
				const link = projectsPage.featuredLink(
					feature.projectTitle,
					feature.publication,
				);
				await expect(link).toBeVisible();
				await expect(link).toHaveAttribute("href", feature.publicationUrl);
			}
		});
	});
});
