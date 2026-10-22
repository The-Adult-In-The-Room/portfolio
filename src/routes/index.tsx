import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	Cloud,
	Code2,
	Database,
	Layers,
	Network,
	Shield,
	Sparkles,
	Workflow,
	Zap,
} from "lucide-react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { projects } from "#/constants/projects";

export const Route = createFileRoute("/")({ component: Home });

const stats = [
	{ label: "Years Experience", value: "8+" },
	{ label: "Projects Shipped", value: "20+" },
	{ label: "Open Source Contributions", value: "10+" },
];

const systemDesignSkills = [
	{
		title: "Distributed Systems",
		description:
			"Designing resilient, scalable services that communicate reliably.",
		icon: Network,
	},
	{
		title: "Data Modeling",
		description: "Database design, caching strategies, and query optimization.",
		icon: Database,
	},
	{
		title: "Cloud Architecture",
		description: "AWS, Railway, serverless, and containerized deployments.",
		icon: Cloud,
	},
	{
		title: "CI/CD & Automation",
		description:
			"Automated testing, deployment pipelines, and rollback strategies.",
		icon: Workflow,
	},
	{
		title: "System Architecture",
		description:
			"Layered architecture, microservices, and event-driven design.",
		icon: Layers,
	},
	{
		title: "Reliability & Security",
		description: "Monitoring, observability, and defensive coding practices.",
		icon: Shield,
	},
];

function Home() {
	return (
		<main className="page-wrap px-4 pb-8 pt-14">
			<section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-16">
				<div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
				<div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
				<Badge variant="accent" className="mb-4 w-fit">
					<Sparkles size={12} />
					Available for work
				</Badge>
				<h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
					I build things for the web.
				</h1>
				<p className="mb-8 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
					Software engineer focused on crafting fast, accessible, and polished
					digital experiences. I love turning complex problems into simple,
					elegant solutions.
				</p>
				<div className="flex flex-wrap gap-3">
					<Button asChild size="lg">
						<Link to="/projects">
							View My Work
							<ArrowRight size={16} />
						</Link>
					</Button>
					<Button asChild variant="secondary" size="lg">
						<Link to="/about">About Me</Link>
					</Button>
				</div>
			</section>

			<section className="mt-8 grid grid-cols-3 gap-4">
				{stats.map((stat, index) => (
					<div
						key={stat.label}
						className="island-shell rise-in rounded-2xl p-5 text-center"
						style={{ animationDelay: `${index * 90 + 80}ms` }}
					>
						<p className="display-title m-0 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
							{stat.value}
						</p>
						<p className="m-0 mt-1 text-xs text-[var(--sea-ink-soft)] sm:text-sm">
							{stat.label}
						</p>
					</div>
				))}
			</section>

			<section className="mt-12">
				<div className="mb-6 flex items-end justify-between">
					<div>
						<p className="island-kicker mb-1">Featured Work</p>
						<h2 className="display-title m-0 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
							Recent Projects
						</h2>
					</div>
					<Button asChild variant="ghost" size="sm">
						<Link to="/projects">
							View all
							<ArrowRight size={14} />
						</Link>
					</Button>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{projects.slice(0, 3).map((project, index) => (
						<Card
							key={project.title}
							className="rise-in transition-transform hover:-translate-y-1"
							style={{ animationDelay: `${index * 100 + 200}ms` }}
						>
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>{project.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-1.5">
									{project.tags.map((tag) => (
										<Badge key={tag} variant="outline">
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="mt-12">
				<div className="mb-6">
					<p className="island-kicker mb-1">Capabilities</p>
					<h2 className="display-title m-0 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
						System Design & Architecture
					</h2>
					<p className="m-0 mt-2 max-w-2xl text-sm text-[var(--sea-ink-soft)]">
						I design systems that are reliable, observable, and easy to evolve —
						from data models and APIs to deployment pipelines.
					</p>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{systemDesignSkills.map((skill, index) => (
						<div
							key={skill.title}
							className="island-shell rise-in flex items-start gap-3 rounded-2xl p-5"
							style={{ animationDelay: `${index * 80 + 500}ms` }}
						>
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)] text-[var(--lagoon-deep)]">
								<skill.icon size={20} />
							</div>
							<div>
								<h3 className="m-0 text-sm font-semibold text-[var(--sea-ink)]">
									{skill.title}
								</h3>
								<p className="m-0 mt-1 text-sm text-[var(--sea-ink-soft)]">
									{skill.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="island-shell mt-12 rounded-2xl p-6 sm:p-8">
				<div className="grid gap-6 sm:grid-cols-3">
					<div className="flex items-start gap-3">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)] text-[var(--lagoon-deep)]">
							<Code2 size={20} />
						</div>
						<div>
							<h3 className="m-0 text-sm font-semibold text-[var(--sea-ink)]">
								Clean Code
							</h3>
							<p className="m-0 mt-1 text-sm text-[var(--sea-ink-soft)]">
								Well-structured, tested, and maintainable codebases.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-3">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)] text-[var(--lagoon-deep)]">
							<Zap size={20} />
						</div>
						<div>
							<h3 className="m-0 text-sm font-semibold text-[var(--sea-ink)]">
								Performance
							</h3>
							<p className="m-0 mt-1 text-sm text-[var(--sea-ink-soft)]">
								Fast load times and smooth interactions, always.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-3">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)] text-[var(--lagoon-deep)]">
							<Sparkles size={20} />
						</div>
						<div>
							<h3 className="m-0 text-sm font-semibold text-[var(--sea-ink)]">
								Polish
							</h3>
							<p className="m-0 mt-1 text-sm text-[var(--sea-ink-soft)]">
								Attention to detail in every pixel and interaction.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
