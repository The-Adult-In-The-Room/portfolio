import { test as base, chromium } from "@playwright/test";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { Navigation } from "../pages/Navigation";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ThemeToggle } from "../pages/ThemeToggle";
import { LIGHTPANDA_WS_ENDPOINT } from "./lightpanda";

export const test = base.extend<{
	homePage: HomePage;
	aboutPage: AboutPage;
	projectsPage: ProjectsPage;
	navigation: Navigation;
	themeToggle: ThemeToggle;
}>({
	browser: async (
		// biome-ignore lint/correctness/noEmptyPattern: Playwright fixture signature requires object destructuring.
		{},
		use,
	) => {
		const browser = await chromium.connectOverCDP(LIGHTPANDA_WS_ENDPOINT);
		await use(browser);
		await browser.close();
	},
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
