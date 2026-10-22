import type { Project } from "#/types/project";

export const projects: Project[] = [
	{
		title: "Blog",
		description:
			"A barebones blog built with TanStack Start, React, and Tailwind CSS.",
		longDescription:
			"Markdown-driven posts with frontmatter support, sorted by date and title. Built on TanStack Start with acceptance, smoke, and regression e2e coverage.",
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
			"Reusable GitHub workflows and composite actions shared across personal projects.",
		longDescription:
			"Includes PR verify, deploy-and-smoke, regression, and Lighthouse workflows plus a contract checker and a canary system that tests reusable workflow changes in the blog repo before release.",
		tags: ["GitHub Actions", "CI/CD", "Node.js"],
		category: "tools",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/ci-workflows",
		year: "2026",
	},
	{
		title: "POE2 Tools",
		description:
			"A browser-based toolkit for Path of Exile 2 players. Evaluate weapon damage and track live currency market rates without leaving the site.",
		longDescription: "Planned features: item market valuation.",
		tags: ["TypeScript", "React", "Tanstack Start", "Railway"],
		category: "fullstack",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/poe2-tools",
		liveUrl: "https://poe2-tools.up.railway.app/",
		year: "2025",
	},
];
