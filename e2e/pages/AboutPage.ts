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

	get swissCheeseLink() {
		return this.page.getByRole("link", { name: "Swiss Cheese Model" });
	}

	get workflowsRepositoryLink() {
		return this.page.getByRole("link", {
			name: "reusable workflows repository",
		});
	}

	async clickSwissCheeseLink() {
		await this.swissCheeseLink.click();
	}

	async clickWorkflowsRepositoryLink() {
		await this.workflowsRepositoryLink.click();
	}
}
