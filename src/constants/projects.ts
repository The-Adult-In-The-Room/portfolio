import type { Project } from "#/types/project";

export const projects: Project[] = [
	{
		title: "Blog",
		description:
			"A content-focused blog with Markdown-driven posts, frontmatter support, and a full test pyramid.",
		longDescription:
			"Posts are sorted by date and title, with draft support for previewing content in development. The fully pre-rendered site scores 100 on Lighthouse performance and is validated through unit, acceptance, smoke, and regression test layers.",
		tags: ["TypeScript", "TanStack Start", "React", "Tailwind CSS"],
		category: "fullstack",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/blog",
		liveUrl: "https://its-giving-winning.com",
		year: "2026",
	},
	{
		title: "CI Workflows",
		description:
			"Reusable GitHub workflows and composite actions for verifying, deploying, and monitoring personal projects.",
		longDescription:
			"Includes PR verify, deploy-and-smoke, regression, and Lighthouse workflow. Internal mechanics include a contract checker and a canary system that tests reusable workflow changes in the blog repo before broad release to other consumers.",
		tags: ["GitHub Actions", "CI/CD", "Node.js"],
		category: "tools",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/ci-workflows",
		year: "2026",
	},
	{
		title: "POE2 Tools",
		description:
			"A browser-based toolkit for Path of Exile 2 players. Evaluate weapon damage and track live currency market rates.",
		longDescription:
			"Includes a weapon DPS calculator and live currency market rates from poe.ninja. Runs unit, acceptance, smoke, and regression test suites against mocked and live data.",
		tags: ["TypeScript", "React", "Tanstack Start", "Railway"],
		category: "fullstack",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/poe2-tools",
		liveUrl: "https://poe2-tools.up.railway.app/",
		year: "2025",
	},
];
