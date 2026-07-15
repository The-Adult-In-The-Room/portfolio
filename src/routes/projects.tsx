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
		title: "DevFlow",
		description:
			"Developer productivity dashboard aggregating GitHub activity, CI/CD status, and deployment metrics.",
		longDescription:
			"A unified dashboard that pulls data from GitHub, CI/CD pipelines, and deployment platforms to give developers a single source of truth for their project health. Features real-time updates, customizable widgets, and team collaboration tools.",
		tags: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL"],
		category: "fullstack",
		status: "live",
		repoUrl: "https://github.com",
		liveUrl: "https://example.com",
		year: "2024",
	},
	{
		title: "Pulse API",
		description:
			"Real-time health monitoring API with webhook integrations, alerting, and status page generation.",
		longDescription:
			"A high-performance health monitoring service that checks endpoints at configurable intervals, triggers alerts via multiple channels (Slack, email, PagerDuty), and generates beautiful public status pages. Built for reliability and scale.",
		tags: ["Go", "PostgreSQL", "Redis", "Docker", "gRPC"],
		category: "backend",
		status: "live",
		repoUrl: "https://github.com",
		year: "2024",
	},
	{
		title: "Pixelcraft",
		description:
			"Image optimization pipeline that compresses, resizes, and converts images for the web.",
		longDescription:
			"A blazing-fast image processing tool that handles batch optimization, format conversion (WebP, AVIF), and responsive image generation. Uses Rust and WebAssembly for near-native performance in the browser.",
		tags: ["Rust", "WebAssembly", "Sharp", "Node.js"],
		category: "tools",
		status: "live",
		repoUrl: "https://github.com",
		year: "2023",
	},
	{
		title: "Notecraft",
		description:
			"A minimal markdown note-taking app with real-time sync and offline support.",
		longDescription:
			"A distraction-free writing environment that supports markdown, real-time collaboration via CRDTs, and works offline with automatic sync when reconnected. Features local-first architecture.",
		tags: ["React", "TypeScript", "Yjs", "IndexedDB", "Tailwind CSS"],
		category: "frontend",
		status: "wip",
		repoUrl: "https://github.com",
		year: "2024",
	},
	{
		title: "Terraviz",
		description:
			"Interactive data visualization library for geospatial and time-series datasets.",
		longDescription:
			"A composable charting library built on D3 and WebGL that specializes in geographic maps and time-series data. Supports streaming data, animations, and responsive layouts out of the box.",
		tags: ["TypeScript", "D3.js", "WebGL", "Canvas"],
		category: "frontend",
		status: "live",
		repoUrl: "https://github.com",
		liveUrl: "https://example.com",
		year: "2023",
	},
	{
		title: "CLI Forge",
		description:
			"A CLI framework for building beautiful, interactive command-line tools with minimal boilerplate.",
		longDescription:
			"An opinionated framework for building CLIs that look great and feel intuitive. Includes built-in argument parsing, progress indicators, spinners, prompts, and table formatting with full TypeScript support.",
		tags: ["TypeScript", "Node.js", "Inquirer", "Chalk"],
		category: "tools",
		status: "archived",
		repoUrl: "https://github.com",
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
