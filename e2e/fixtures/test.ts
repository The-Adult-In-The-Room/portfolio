import { test as base } from "@playwright/test";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { Navigation } from "../pages/Navigation";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ThemeToggle } from "../pages/ThemeToggle";

export const test = base.extend<{
	homePage: HomePage;
	aboutPage: AboutPage;
	projectsPage: ProjectsPage;
	navigation: Navigation;
	themeToggle: ThemeToggle;
}>({
	homePage: async ({ page }, use) => {
		await use(new HomePage(page));
	},
	aboutPage: async ({ page }, use) => {
		await use(new AboutPage(page));
	},
	projectsPage: async ({ page }, use) => {
		await use(new ProjectsPage(page));
	},
	navigation: async ({ page }, use) => {
		await use(new Navigation(page));
	},
	themeToggle: async ({ page }, use) => {
		await use(new ThemeToggle(page));
	},
});

export { expect } from "@playwright/test";
