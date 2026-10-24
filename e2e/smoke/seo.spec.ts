import {
	OG_IMAGE_URL,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_URL,
} from "#/constants/site";
import { expect, test } from "../fixtures/test";

test.describe("GIVEN a visitor shares the site", () => {
	test("WHEN the home page loads THEN SEO and social tags are correct", async ({
		homePage,
		seoPage,
	}) => {
		await test.step("GIVEN the user is on the home page", async () => {
			await homePage.goto();
		});

		await test.step("THEN the page title and favicon are correct", async () => {
			await expect.poll(async () => seoPage.title()).toBe(SITE_NAME);
			await expect(seoPage.faviconLink).toHaveAttribute("href", "/favicon.ico");
			await expect(seoPage.svgFaviconLink).toHaveAttribute(
				"href",
				"/favicon.svg",
			);
			await expect(seoPage.appleTouchIconLink).toHaveAttribute(
				"href",
				"/logo192.png",
			);
			await expect(seoPage.manifestLink).toHaveAttribute(
				"href",
				"/manifest.json",
			);
		});

		await test.step("THEN the description and theme color are correct", async () => {
			await expect(seoPage.metaDescription).toHaveAttribute(
				"content",
				SITE_DESCRIPTION,
			);
			await expect(seoPage.themeColorMeta).toHaveAttribute(
				"content",
				"#0f172a",
			);
		});

		await test.step("THEN Open Graph tags are correct", async () => {
			await expect(seoPage.ogTitleMeta).toHaveAttribute("content", SITE_NAME);
			await expect(seoPage.ogDescriptionMeta).toHaveAttribute(
				"content",
				SITE_DESCRIPTION,
			);
			await expect(seoPage.ogImageMeta).toHaveAttribute(
				"content",
				OG_IMAGE_URL,
			);
			await expect(seoPage.ogUrlMeta).toHaveAttribute("content", SITE_URL);
			await expect(seoPage.ogTypeMeta).toHaveAttribute("content", "website");
		});

		await test.step("THEN Twitter Card tags are correct", async () => {
			await expect(seoPage.twitterCardMeta).toHaveAttribute(
				"content",
				"summary_large_image",
			);
			await expect(seoPage.twitterTitleMeta).toHaveAttribute(
				"content",
				SITE_NAME,
			);
			await expect(seoPage.twitterDescriptionMeta).toHaveAttribute(
				"content",
				SITE_DESCRIPTION,
			);
			await expect(seoPage.twitterImageMeta).toHaveAttribute(
				"content",
				OG_IMAGE_URL,
			);
			await expect(seoPage.twitterUrlMeta).toHaveAttribute("content", SITE_URL);
		});

		await test.step("THEN the favicon and OG image are reachable", async () => {
			const faviconResponse = await seoPage.fetchFavicon();
			await expect(faviconResponse).toBeOK();

			const ogImageResponse = await seoPage.fetchOgImage();
			await expect(ogImageResponse).toBeOK();
		});
	});

	test("WHEN the projects page loads THEN SEO and social tags are correct", async ({
		projectsPage,
		seoPage,
	}) => {
		await test.step("GIVEN the user is on the projects page", async () => {
			await projectsPage.goto();
		});

		await test.step("THEN the page title and favicon are correct", async () => {
			await expect.poll(async () => seoPage.title()).toBe(SITE_NAME);
			await expect(seoPage.faviconLink).toHaveAttribute("href", "/favicon.ico");
		});

		await test.step("THEN Open Graph and Twitter tags are correct", async () => {
			await expect(seoPage.ogTitleMeta).toHaveAttribute("content", SITE_NAME);
			await expect(seoPage.ogImageMeta).toHaveAttribute(
				"content",
				OG_IMAGE_URL,
			);
			await expect(seoPage.ogUrlMeta).toHaveAttribute("content", SITE_URL);
			await expect(seoPage.twitterImageMeta).toHaveAttribute(
				"content",
				OG_IMAGE_URL,
			);
			await expect(seoPage.twitterUrlMeta).toHaveAttribute("content", SITE_URL);
		});

		await test.step("THEN the favicon and OG image are reachable", async () => {
			const faviconResponse = await seoPage.fetchFavicon();
			await expect(faviconResponse).toBeOK();

			const ogImageResponse = await seoPage.fetchOgImage();
			await expect(ogImageResponse).toBeOK();
		});
	});

	test("WHEN the about page loads THEN SEO and social tags are correct", async ({
		aboutPage,
		seoPage,
	}) => {
		await test.step("GIVEN the user is on the about page", async () => {
			await aboutPage.goto();
		});

		await test.step("THEN the page title and favicon are correct", async () => {
			await expect.poll(async () => seoPage.title()).toBe(SITE_NAME);
			await expect(seoPage.faviconLink).toHaveAttribute("href", "/favicon.ico");
		});

		await test.step("THEN Open Graph and Twitter tags are correct", async () => {
			await expect(seoPage.ogTitleMeta).toHaveAttribute("content", SITE_NAME);
			await expect(seoPage.ogImageMeta).toHaveAttribute(
				"content",
				OG_IMAGE_URL,
			);
			await expect(seoPage.ogUrlMeta).toHaveAttribute("content", SITE_URL);
			await expect(seoPage.twitterImageMeta).toHaveAttribute(
				"content",
				OG_IMAGE_URL,
			);
			await expect(seoPage.twitterUrlMeta).toHaveAttribute("content", SITE_URL);
		});

		await test.step("THEN the favicon and OG image are reachable", async () => {
			const faviconResponse = await seoPage.fetchFavicon();
			await expect(faviconResponse).toBeOK();

			const ogImageResponse = await seoPage.fetchOgImage();
			await expect(ogImageResponse).toBeOK();
		});
	});
});
