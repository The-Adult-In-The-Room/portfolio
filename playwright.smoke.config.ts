import { defineConfig } from "@playwright/test";

if (!process.env.SMOKE_BASE_URL) {
	throw new Error(
		"SMOKE_BASE_URL is required for smoke tests. Set it to the deployed URL, e.g. https://example.up.railway.app",
	);
}

export default defineConfig({
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? "dot" : "list",
	globalSetup: "./e2e/fixtures/globalSetup.ts",
	globalTeardown: "./e2e/fixtures/globalTeardown.ts",
	use: {
		baseURL: process.env.SMOKE_BASE_URL,
		trace: "on-first-retry",
	},
	expect: {
		timeout: 5000,
	},
	projects: [
		{
			name: "smoke",
			testDir: "./e2e/smoke",
		},
	],
});
