export type Project = {
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
