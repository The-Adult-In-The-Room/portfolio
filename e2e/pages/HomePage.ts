import type { Page } from "@playwright/test";

export class HomePage {
	constructor(private readonly page: Page) {}

	async goto() {
		await this.page.goto("/");
	}

	get heading() {
		return this.page.getByRole("heading", {
			name: "I build things for the web.",
		});
	}

	get viewWorkButton() {
		return this.page.getByRole("link", { name: /View My Work/i });
	}
}
