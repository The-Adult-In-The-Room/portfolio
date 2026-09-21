import type { Page } from "@playwright/test";

export class AboutPage {
	constructor(private readonly page: Page) {}

	async goto() {
		await this.page.goto("/about");
	}

	get heading() {
		return this.page.getByRole("heading", { name: "Hey, I'm Raymond." });
	}

	get skillsSection() {
		return this.page.getByRole("heading", { name: "Skills" });
	}
}
