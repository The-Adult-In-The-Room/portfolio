import { defineConfig } from "@playwright/test";

const BASE_URL = process.env.REGRESSION_BASE_URL;

if (!BASE_URL) {
	throw new Error("REGRESSION_BASE_URL must be set to run regression tests.");
}

export default defineConfig({
	fullyParallel: true,
	workers: process.env.CI ? 3 : undefined,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? "dot" : "list",
	globalSetup: "./e2e/fixtures/globalSetup.ts",
	globalTeardown: "./e2e/fixtures/globalTeardown.ts",
	use: {
		baseURL: BASE_URL,
		trace: "on-first-retry",
	},
	expect: {
		timeout: 10000,
	},
	projects: [
		{
			name: "regression",
			testDir: "./e2e/regression",
		},
	],
});
