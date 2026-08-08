import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Globe } from "lucide-react";
import { GithubIcon } from "#/components/icons";

import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";

export const Route = createFileRoute("/projects")({ component: Projects });

type Project = {
	title: string;
	description: string;
	longDescription: string;
	tags: string[];
	category: "frontend" | "backend" | "fullstack" | "tools";
	status: "live" | "wip" | "archived";
	repoUrl?: string;
	liveUrl?: string;
	year: string;
};

const projects: Project[] = [
	{
		title: "Lorebrary",
		description:
			"A lore and reference library built with TanStack Start, featuring SSR, type-safe routing, and a polished UI.",
		longDescription:
			"A full-stack web application built on TanStack Start with Tailwind CSS and Shadcn UI. Features server-side rendering, type-safe data fetching with Drizzle ORM, and a clean component architecture.",
		tags: [
			"TypeScript",
			"TanStack Start",
			"Tailwind CSS",
			"Shadcn UI",
			"Drizzle",
		],
		category: "fullstack",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/Lorebrary-start",
		liveUrl: "https://182350.up.railway.app",
		year: "2025",
	},
	{
		title: "POE2 Tools",
		description:
			"A suite of tools for Path of Exile 2, including a weapon DPS calculator for theorycrafting builds.",
		longDescription:
			"A collection of utilities for Path of Exile 2 players. Currently features a weapon DPS calculator for theorycrafting builds, with item valuation planned for the future. Built with TypeScript and deployed via GitHub Pages.",
		tags: ["TypeScript", "React", "Parcel", "GitHub Pages"],
		category: "tools",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/poe2-tools",
		liveUrl: "https://the-adult-in-the-room.github.io/poe2-tools/",
		year: "2025",
	},
	{
		title: "Bap Heads",
		description:
			"Community website for the Bap Heads Old School RuneScape clan, built with React and deployed to GitHub Pages.",
		longDescription:
			"A clan website for the Bap Heads OSRS community. Built with React and Parcel, featuring CI/CD via GitHub Actions with automated linting, testing, and deployment. Includes pre-commit hooks with Husky for code quality.",
		tags: ["JavaScript", "React", "Parcel", "GitHub Actions", "Jest"],
		category: "frontend",
		status: "live",
		repoUrl: "https://github.com/The-Adult-In-The-Room/bap-heads",
		liveUrl: "https://bapheads.com",
		year: "2022",
	},
	{
		title: "VG Web",
		description:
			"A gaming news and information site built with React, displaying game releases, news, and popular titles from the IGDB API.",
		longDescription:
			"The frontend for a full-stack gaming platform. Built with React and Parcel, it uses React Router for navigation and React Query for data fetching. Displays video game news, new releases, popular titles, and upcoming games powered by the IGDB API.",
		tags: ["JavaScript", "React", "React Router", "React Query", "SCSS"],
		category: "frontend",
		status: "live",
		repoUrl: "https://github.com/Two-Boys-and-a-Dream/vg-web",
		year: "2022",
	},
	{
		title: "VG API",
		description:
			"Express/Node.js REST API that interfaces with the IGDB (International Game Data Base) API for gaming data.",
		longDescription:
			"The backend service for the VG gaming platform. Built with Express and Node.js, it proxies requests to the IGDB and RapidAPI services, providing a clean REST interface for the frontend. Deployed on Railway with environment-based configuration.",
		tags: ["JavaScript", "Node.js", "Express", "IGDB API", "Railway"],
		category: "backend",
		status: "live",
		repoUrl: "https://github.com/Two-Boys-and-a-Dream/vg-api",
		year: "2022",
	},
];

const categoryLabels: Record<Project["category"], string> = {
	frontend: "Frontend",
	backend: "Backend",
	fullstack: "Full Stack",
	tools: "Tools & Libraries",
};

const statusVariant: Record<
	Project["status"],
	"accent" | "default" | "outline"
> = {
	live: "accent",
	wip: "default",
	archived: "outline",
};

function Projects() {
	return (
		<main className="page-wrap px-4 py-12">
			<section className="island-shell rounded-2xl p-6 sm:p-8">
				<p className="island-kicker mb-2">Portfolio</p>
				<h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
					Projects
				</h1>
				<p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
					A selection of things I've built — from full-stack apps to developer
					tools. Each project reflects my focus on clean architecture,
					performance, and user experience.
				</p>
			</section>

			<section className="mt-8">
				<Tabs defaultValue="all">
					<TabsList>
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="fullstack">Full Stack</TabsTrigger>
						<TabsTrigger value="frontend">Frontend</TabsTrigger>
						<TabsTrigger value="backend">Backend</TabsTrigger>
						<TabsTrigger value="tools">Tools</TabsTrigger>
					</TabsList>

					<TabsContent value="all">
						<ProjectGrid projects={projects} />
					</TabsContent>
					<TabsContent value="fullstack">
						<ProjectGrid
							projects={projects.filter((p) => p.category === "fullstack")}
						/>
					</TabsContent>
					<TabsContent value="frontend">
						<ProjectGrid
							projects={projects.filter((p) => p.category === "frontend")}
						/>
					</TabsContent>
					<TabsContent value="backend">
						<ProjectGrid
							projects={projects.filter((p) => p.category === "backend")}
						/>
					</TabsContent>
					<TabsContent value="tools">
						<ProjectGrid
							projects={projects.filter((p) => p.category === "tools")}
						/>
					</TabsContent>
				</Tabs>
			</section>
		</main>
	);
}

function ProjectGrid({ projects }: { projects: Project[] }) {
	return (
		<div className="grid gap-4 sm:grid-cols-2">
			{projects.map((project, index) => (
				<Card
					key={project.title}
					className="rise-in"
					style={{ animationDelay: `${index * 80}ms` }}
				>
					<CardHeader>
						<div className="flex items-start justify-between gap-2">
							<CardTitle className="text-lg">{project.title}</CardTitle>
							<div className="flex shrink-0 items-center gap-1.5">
								<Badge variant={statusVariant[project.status]}>
									{project.status === "live"
										? "Live"
										: project.status === "wip"
											? "WIP"
											: "Archived"}
								</Badge>
								<Badge variant="outline">{project.year}</Badge>
							</div>
						</div>
						<CardDescription>{project.description}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="mb-4 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
							{project.longDescription}
						</p>
						<Separator className="mb-4" />
						<div className="flex flex-wrap gap-1.5">
							{project.tags.map((tag) => (
								<Badge key={tag} variant="outline">
									{tag}
								</Badge>
							))}
						</div>
					</CardContent>
					<CardFooter className="gap-2">
						{project.repoUrl && (
							<Button asChild variant="secondary" size="sm">
								<a href={project.repoUrl} target="_blank" rel="noreferrer">
									<GithubIcon size={14} />
									Code
								</a>
							</Button>
						)}
						{project.liveUrl && (
							<Button asChild size="sm">
								<a href={project.liveUrl} target="_blank" rel="noreferrer">
									<Globe size={14} />
									Live Demo
									<ArrowUpRight size={14} />
								</a>
							</Button>
						)}
						<Badge
							variant="default"
							className="ml-auto text-[var(--sea-ink-soft)]"
						>
							{categoryLabels[project.category]}
						</Badge>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
