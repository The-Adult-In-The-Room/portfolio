import fs from "node:fs";
import path from "node:path";

function readManifest(dir) {
	const manifestPath = path.join(dir, "manifest.json");
	if (!fs.existsSync(manifestPath)) return null;
	return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function groupByPathname(manifest) {
	const groups = new Map();
	for (const entry of manifest) {
		const pathname = new URL(entry.url).pathname;
		if (!groups.has(pathname)) groups.set(pathname, []);
		groups.get(pathname).push(entry.summary);
	}
	return groups;
}

function median(values) {
	const sorted = [...values].sort((a, b) => a - b);
	const mid = Math.floor(sorted.length / 2);
	return sorted.length % 2 === 0
		? (sorted[mid - 1] + sorted[mid]) / 2
		: sorted[mid];
}

function formatScore(score) {
	if (score === null || score === undefined) return "—";
	return `${Math.round(score * 100)}`;
}

function renderTable(title, groups) {
	const rows = [];
	for (const [url, summaries] of groups) {
		rows.push({
			url,
			performance: median(summaries.map((s) => s.performance)),
			accessibility: median(summaries.map((s) => s.accessibility)),
			bestPractices: median(summaries.map((s) => s["best-practices"])),
			seo: median(summaries.map((s) => s.seo)),
		});
	}

	if (rows.length === 0) return "";

	return [
		`### ${title}`,
		"",
		"| URL | Performance | Accessibility | Best Practices | SEO |",
		"| --- | ----------- | ------------- | -------------- | --- |",
		...rows.map(
			(r) =>
				`| ${r.url} | ${formatScore(r.performance)} | ${formatScore(r.accessibility)} | ${formatScore(r.bestPractices)} | ${formatScore(r.seo)} |`,
		),
		"",
	].join("\n");
}

const mobile = readManifest(".lighthouseci/mobile");
const desktop = readManifest(".lighthouseci/desktop");

const parts = ["## Lighthouse Results", ""];

if (mobile) {
	parts.push(renderTable("Mobile", groupByPathname(mobile)));
}

if (desktop) {
	parts.push(renderTable("Desktop", groupByPathname(desktop)));
}

parts.push("");
parts.push("Full HTML reports are available in the `lighthouse-reports` artifact.");

const summary = parts.join("\n");
const outputPath = process.env.GITHUB_STEP_SUMMARY;

if (outputPath) {
	fs.appendFileSync(outputPath, summary);
} else {
	console.log(summary);
}
