import type { Page } from "@playwright/test";

export class Navigation {
	constructor(private readonly page: Page) {}

	get homeLink() {
		return this.page.getByRole("link", { name: "Home" });
	}

	get projectsLink() {
		return this.page.getByRole("link", { name: "Projects" });
	}

	get aboutLink() {
		return this.page.getByRole("link", { name: "About" });
	}

	async goHome() {
		await this.homeLink.click();
	}

	async goToProjects() {
		await this.projectsLink.click();
	}

	async goToAbout() {
		await this.aboutLink.click();
	}
}
