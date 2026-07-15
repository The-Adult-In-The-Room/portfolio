import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Code2, Heart, MapPin } from "lucide-react";
import { Badge } from "#/components/ui/badge";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/about")({ component: About });

const skills = [
	{
		category: "Languages",
		items: ["TypeScript", "JavaScript", "Go", "Rust", "Python", "SQL"],
	},
	{
		category: "Frontend",
		items: [
			"React",
			"Next.js",
			"TanStack Router",
			"Tailwind CSS",
			"Shadcn UI",
			"Framer Motion",
		],
	},
	{
		category: "Backend",
		items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "gRPC", "Docker"],
	},
	{
		category: "Tools & Other",
		items: ["Git", "CI/CD", "AWS", "Linux", "Figma", "Testing"],
	},
];

const experience = [
	{
		role: "Senior Software Engineer",
		company: "Tech Company",
		period: "2022 — Present",
		description:
			"Leading frontend architecture and developer experience initiatives. Building scalable design systems and mentoring junior engineers.",
	},
	{
		role: "Software Engineer",
		company: "Startup Inc.",
		period: "2020 — 2022",
		description:
			"Full-stack development on a real-time collaboration platform. Shipped features used by thousands of daily active users.",
	},
	{
		role: "Junior Developer",
		company: "Digital Agency",
		period: "2019 — 2020",
		description:
			"Built responsive web applications and e-commerce sites for clients across various industries.",
	},
];

function About() {
	return (
		<main className="page-wrap px-4 py-12">
			<section className="island-shell relative overflow-hidden rounded-2xl p-6 sm:p-8">
				<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.2),transparent_66%)]" />
				<div className="flex flex-col gap-6 sm:flex-row sm:items-start">
					<div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(79,184,178,0.2),rgba(47,106,74,0.15))]">
						<span className="display-title text-3xl font-bold text-[var(--lagoon-deep)]">
							R
						</span>
					</div>
					<div>
						<p className="island-kicker mb-2">About Me</p>
						<h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
							Hey, I'm Raymond.
						</h1>
						<p className="mb-4 max-w-2xl text-base leading-8 text-[var(--sea-ink-soft)]">
							I'm a software engineer who loves building products that make a
							difference. I care deeply about clean code, great user
							experiences, and the open-source community.
						</p>
						<div className="flex flex-wrap gap-2">
							<Badge variant="accent">
								<MapPin size={12} />
								Detroit, MI
							</Badge>
							<Badge variant="default">
								<Briefcase size={12} />
								Open to opportunities
							</Badge>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-8 grid gap-6 lg:grid-cols-5">
				<div className="lg:col-span-3">
					<div className="island-shell rounded-2xl p-6">
						<div className="mb-4 flex items-center gap-2">
							<Briefcase size={18} className="text-[var(--lagoon-deep)]" />
							<h2 className="m-0 text-lg font-bold text-[var(--sea-ink)]">
								Experience
							</h2>
						</div>
						<div className="flex flex-col gap-6">
							{experience.map((job, index) => (
								<div key={job.role}>
									{index > 0 && <Separator className="mb-6" />}
									<div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
										<div>
											<h3 className="m-0 text-sm font-semibold text-[var(--sea-ink)]">
												{job.role}
											</h3>
											<p className="m-0 text-sm text-[var(--lagoon-deep)]">
												{job.company}
											</p>
										</div>
										<p className="m-0 text-xs text-[var(--sea-ink-soft)] sm:mt-1">
											{job.period}
										</p>
									</div>
									<p className="m-0 mt-2 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
										{job.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6 lg:col-span-2">
					<div className="island-shell rounded-2xl p-6">
						<div className="mb-4 flex items-center gap-2">
							<Code2 size={18} className="text-[var(--lagoon-deep)]" />
							<h2 className="m-0 text-lg font-bold text-[var(--sea-ink)]">
								Skills
							</h2>
						</div>
						<div className="flex flex-col gap-4">
							{skills.map((group) => (
								<div key={group.category}>
									<p className="m-0 mb-2 text-xs font-semibold text-[var(--sea-ink-soft)]">
										{group.category}
									</p>
									<div className="flex flex-wrap gap-1.5">
										{group.items.map((skill) => (
											<Badge key={skill} variant="outline">
												{skill}
											</Badge>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="island-shell rounded-2xl p-6">
						<div className="mb-4 flex items-center gap-2">
							<Heart size={18} className="text-[var(--lagoon-deep)]" />
							<h2 className="m-0 text-lg font-bold text-[var(--sea-ink)]">
								Interests
							</h2>
						</div>
						<div className="flex flex-wrap gap-1.5">
							{[
								"Open Source",
								"Developer Tools",
								"Design Systems",
								"Performance",
								"Accessibility",
								"Web Standards",
							].map((interest) => (
								<Badge key={interest} variant="accent">
									{interest}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
