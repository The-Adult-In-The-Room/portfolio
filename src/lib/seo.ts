import { SITE_URL } from "#/constants/site";

/**
 * Builds the canonical absolute URL for a route path, used by per-route
 * Open Graph (`og:url`) and Twitter Card (`twitter:url`) meta tags.
 *
 * The root path maps to the bare site URL (no trailing slash).
 */
export function buildCanonicalUrl(path: string): string {
	return `${SITE_URL}${path === "/" ? "" : path}`;
}
