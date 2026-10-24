import { OG_IMAGE_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

describe("GIVEN the site metadata constants", () => {
	test("THEN they define the site name, description, canonical URL, and OG image", () => {
		expect(SITE_NAME).toBe("Raymond — Software Engineer");
		expect(SITE_DESCRIPTION).toBe(
			"Software engineer building fast, accessible, and polished web experiences.",
		);
		expect(SITE_URL).toBe("https://rcox.dev");
		expect(OG_IMAGE_URL).toBe(`${SITE_URL}/og-image.png`);
	});
});
