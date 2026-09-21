import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor on the home page", () => {
	test("WHEN they toggle the theme THEN the document class and data attribute update", async ({
		page,
		homePage,
		themeToggle,
	}) => {
		await test.step("GIVEN the visitor starts on the home page", async () => {
			await homePage.goto();
			await expect(themeToggle.button).toBeVisible();
		});

		await test.step("WHEN they click the theme toggle THEN the mode switches to light", async () => {
			await themeToggle.toggle();
			await themeToggle.expectMode("light");
		});

		await test.step("WHEN they click the theme toggle again THEN the mode switches to dark", async () => {
			await themeToggle.toggle();
			await themeToggle.expectMode("dark");
		});

		await test.step("WHEN they click the theme toggle a third time THEN the mode switches to auto", async () => {
			await themeToggle.toggle();
			const html = page.locator("html");
			await expect(html).not.toHaveAttribute("data-theme", "light");
			await expect(html).not.toHaveAttribute("data-theme", "dark");
		});
	});
});
