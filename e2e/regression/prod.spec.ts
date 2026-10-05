import { expect, test } from "../fixtures/test";

test.describe("GIVEN the production deployment", () => {
	test("WHEN the home page loads THEN it renders without runtime errors", async ({
		homePage,
	}) => {
		await homePage.goto();
		await expect(homePage.heading).toBeVisible();
	});
});
