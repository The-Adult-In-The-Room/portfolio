import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
	Briefcase,
	Code2,
	Cog,
	FlaskConical,
	Gauge,
	Heart,
	Layers,
	MapPin,
} from "lucide-react";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/about")({ component: About });

const skills = [
	{
		category: "Languages",
		items: ["TypeScript", "JavaScript", "Go", "Python"],
	},
	{
		category: "Frontend",
		items: [
			"React",
			"Next.js",
			"TanStack Start",
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
		items: [
			"Git",
			"CI/CD",
			"AWS",
			"Linux",
			"Figma",
			"Testing",
			"Excalidraw",
			"Flowcharting",
		],
	},
];

type FocusArea = {
	area: string;
	icon: LucideIcon;
	content: React.ReactNode;
};

const focus: FocusArea[] = [
	{
		area: "Testing",
		icon: FlaskConical,
		content: (
			<p>
				As a true disciple of multi-layer automated testing, I follow a{" "}
				<a
					href="https://www.semblanceoffunctionality.com/swiss-cheese/"
					target="_blank"
					rel="noopener"
				>
					"Swiss Cheese Model"
				</a>{" "}
				testing approach of: unit, acceptance, smoke, regression. All of my
				personal projects abide by this, as well as accessibility and
				performance testing via Lighthouse.
			</p>
		),
	},
	{
		area: "Automation",
		icon: Cog,
		content: (
			<p>
				I love devising CI/CD pipelines that deliver sophisticated software on a
				budget, as displayed in my{" "}
				<a
					href="https://github.com/The-Adult-In-The-Room/ci-workflows"
					target="_blank"
					rel="noopener"
				>
					reusable workflows repository
				</a>
				. Over my career I've constantly experimented with different
				infrastructure platforms as well as the most cost-effective ways to make
				lemonade out of lemons. I know how to keep operating costs at pennies,
				not dollars.
			</p>
		),
	},
	{
		area: "Performance",
		icon: Gauge,
		content: (
			<p>
				Nothing excites me more than benchmarking a performance issue.
				Quantifying gains from before and afters measures the true outcome. This
				teaches lessons on judgement and justification, as everything is a
				tradeoff. There are scenarios the time, money, and complexity invested
				aren't worth the results. The ability to recognize this yields an
				experienced developer with the wisdom to guide others.
			</p>
		),
	},
	{
		area: "Architecture",
		icon: Layers,
		content: (
			<p>
				Clean architecture yields plans that allow teams to deliver, as well as
				systems that extend beyond themselves and stand the test of time.
				Systems design has been a heavy focus for myself over the past few
				years. I have a knack for turning loose business requirements into a
				well understood plan that spans multiple cross-team domains by
				collaborating with system owners. The most important part is distilling
				domain complexity into a simplistic aerial integration plan.
			</p>
		),
	},
];

function About() {
	return (
		<main className="page-wrap px-4 py-12">
			<section className="island-shell relative overflow-hidden rounded-2xl p-6 sm:p-8">
				<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.2),transparent_66%)]" />
				<div className="flex flex-col gap-6 sm:flex-row sm:items-start">
					<div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(79,184,178,0.2),rgba(47,106,74,0.15))]">
						<span className="display-title text-3xl font-bold text-bold text-[var(--lagoon-deep)]">
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
						<div className="flex flex-col">
							{focus.map((item) => (
								<div
									key={item.area}
									className="group flex gap-4 border-b border-[var(--line)] py-5 first:pt-0 last:border-b-0 last:pb-0"
								>
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--lagoon-deep)] transition-colors group-hover:border-[var(--lagoon-deep)]/30">
										<item.icon size={20} />
									</div>
									<div>
										<h3 className="mb-2 text-base font-bold text-[var(--sea-ink)]">
											{item.area}
										</h3>
										<div className="text-[15px] leading-7 text-[var(--sea-ink-soft)] [&_a]:font-medium [&_a]:text-[var(--lagoon-deep)] [&_a]:underline [&_a]:decoration-[var(--lagoon-deep)]/30 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:decoration-[var(--lagoon-deep)]">
											{item.content}
										</div>
									</div>
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
								"System Design",
								"Automation",
								"Testing",
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
