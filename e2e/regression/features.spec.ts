import { features } from "#/constants/features";
import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor viewing featured work", () => {
	test("WHEN feature links render THEN they open safely in a new tab", async ({
		homePage,
		projectsPage,
	}) => {
		await test.step("GIVEN the visitor is on the home page", async () => {
			await homePage.goto();
			await expect(homePage.featuredHeading).toBeVisible();
		});

		await test.step("THEN each feature card link has safe external attributes", async () => {
			for (const feature of features) {
				const link = homePage.featureLink(feature.publication);
				await expect(link).toHaveAttribute("href", feature.publicationUrl);
				await expect(link).toHaveAttribute("target", "_blank");
				await expect(link).toHaveAttribute("rel", "noreferrer");
			}
		});

		await test.step("THEN each featured project banner link has safe external attributes", async () => {
			await projectsPage.goto();
			await expect(projectsPage.heading).toBeVisible();
			for (const feature of features) {
				const link = projectsPage.featuredLink(
					feature.projectTitle,
					feature.publication,
				);
				await expect(link).toHaveAttribute("href", feature.publicationUrl);
				await expect(link).toHaveAttribute("target", "_blank");
				await expect(link).toHaveAttribute("rel", "noreferrer");
			}
		});
	});

	test("WHEN feature publications are requested THEN each one is reachable", async ({
		request,
	}) => {
		for (const feature of features) {
			await test.step(`THEN ${feature.publication} is reachable`, async () => {
				const response = await request.get(feature.publicationUrl);
				expect(response.ok()).toBe(true);
			});
		}
	});
});
