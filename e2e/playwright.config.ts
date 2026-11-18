import { defineConfig } from "@playwright/test";

const PORT = Number(process.env.PORT || 3000);
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
	fullyParallel: true,
	workers: process.env.CI ? 3 : undefined,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? "dot" : "list",
	globalSetup: "./fixtures/globalSetup.ts",
	globalTeardown: "./fixtures/globalTeardown.ts",
	use: {
		baseURL: BASE_URL,
		trace: "on-first-retry",
	},
	expect: {
		timeout: 5000,
	},
	projects: [
		{
			name: "acceptance",
			testDir: "./acceptance",
		},
	],
	webServer: {
		command: "npm run preview",
		url: BASE_URL,
		cwd: "..",
		reuseExistingServer: false,
		stdout: "pipe",
		stderr: "ignore",
	},
});
