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
import { projects } from "#/constants/projects";
import type { Project } from "#/types/project";

export const Route = createFileRoute("/projects")({ component: Projects });

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
					performance, automation, and user experience.
				</p>
			</section>

			<section className="mt-8">
				<ProjectGrid projects={projects} />
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
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
