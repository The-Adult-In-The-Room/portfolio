import { SITE_URL } from "#/constants/site";
import { buildCanonicalUrl } from "./seo";

describe("GIVEN the buildCanonicalUrl helper", () => {
	test("WHEN the path is the root THEN it returns the bare site URL without a trailing slash", () => {
		expect(buildCanonicalUrl("/")).toBe(SITE_URL);
		expect(buildCanonicalUrl("/")).toBe("https://rcox.dev");
	});

	test("WHEN the path is a page route THEN it appends the path to the site URL", () => {
		expect(buildCanonicalUrl("/projects")).toBe(`${SITE_URL}/projects`);
		expect(buildCanonicalUrl("/about")).toBe(`${SITE_URL}/about`);
	});
});
