import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: ["./src/test-utils/setupTests.ts"],
		exclude: ["e2e/**", "node_modules/**", "dist/**", ".output/**"],
		coverage: {
			include: ["src/**/*"],
			exclude: [
				"**/index.ts",
				"**/index.tsx",
				"src/types",
				"src/data",
				"src/routes/**",
				"src/router.tsx",
				"src/routeTree.gen.ts",
				"src/styles.css",
				"src/assets/**",
			],
			thresholds: {
				statements: 95,
				branches: 95,
				functions: 95,
				lines: 95,
				autoUpdate: false,
			},
		},
	},
});
