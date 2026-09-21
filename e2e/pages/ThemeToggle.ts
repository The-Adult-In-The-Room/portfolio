import { expect, type Page } from "@playwright/test";

export class ThemeToggle {
	constructor(private readonly page: Page) {}

	get button() {
		return this.page.locator("header").getByRole("button");
	}

	async toggle() {
		await this.button.click();
	}

	async expectMode(mode: "light" | "dark") {
		await expect(this.page.locator("html")).toHaveClass(mode);
		await expect(this.page.locator("html")).toHaveAttribute("data-theme", mode);
	}
}
