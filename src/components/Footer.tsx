import { GithubIcon, LinkedinIcon } from "./icons";
import { Separator } from "./ui/separator";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-20 px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
			<div className="page-wrap">
				<Separator className="mb-8" />
				<div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
					<div className="text-center sm:text-left">
						<p className="m-0 text-sm font-semibold text-[var(--sea-ink)]">
							Raymond
						</p>
						<p className="m-0 mt-1 text-sm">Software Engineer &amp; Builder</p>
					</div>
					<div className="flex flex-col items-center gap-3 sm:items-end">
						<div className="flex items-center gap-3">
							<a
								href="https://github.com/The-Adult-In-The-Room"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
							>
								<span className="sr-only">GitHub</span>
								<GithubIcon />
							</a>
							<a
								href="https://www.linkedin.com/in/raymond-cox/"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
							>
								<span className="sr-only">LinkedIn</span>
								<LinkedinIcon />
							</a>
						</div>
						<p className="island-kicker m-0">
							&copy; {year} All rights reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
