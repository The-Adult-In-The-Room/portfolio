import type { Page } from "@playwright/test";

export class ProjectsPage {
	constructor(private readonly page: Page) {}

	async goto() {
		await this.page.goto("/projects");
	}

	get heading() {
		return this.page.getByRole("heading", { name: "Projects" });
	}

	get tabList() {
		return this.page.getByRole("tablist");
	}

	getTab(name: string) {
		return this.page.getByRole("tab", { name });
	}

	async filterByCategory(category: string) {
		await this.getTab(category).click();
	}

	get projectCards() {
		return this.page.locator("[data-slot='card']");
	}
}
