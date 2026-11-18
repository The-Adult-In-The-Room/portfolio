import type { Page } from "@playwright/test";

export class ProjectsPage {
	constructor(private readonly page: Page) {}

	async goto() {
		await this.page.goto("/projects");
	}

	get heading() {
		return this.page.getByRole("heading", { name: "Projects" });
	}

	get projectCards() {
		return this.page.locator("[data-slot='card']");
	}

	featuredLink(projectTitle: string, publication: string) {
		return this.projectCards
			.filter({ hasText: projectTitle })
			.getByRole("link", { name: publication });
	}
}
