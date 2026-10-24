import { test as base, chromium } from "@playwright/test";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { Navigation } from "../pages/Navigation";
import { ProjectsPage } from "../pages/ProjectsPage";
import { SeoPage } from "../pages/SeoPage";
import { ThemeToggle } from "../pages/ThemeToggle";
import { LIGHTPANDA_WS_ENDPOINT } from "./lightpanda";

export const test = base.extend<{
	homePage: HomePage;
	aboutPage: AboutPage;
	projectsPage: ProjectsPage;
	navigation: Navigation;
	themeToggle: ThemeToggle;
	seoPage: SeoPage;
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
	context: async ({ context }, use) => {
		// Exclude all e2e runs from Umami analytics.
		// https://docs.umami.is/docs/exclude-my-own-visits
		await context.addInitScript(() => {
			localStorage.setItem("umami.disabled", "1");
		});
		await use(context);
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
	seoPage: async ({ page }, use) => {
		await use(new SeoPage(page));
	},
});

export { expect } from "@playwright/test";
