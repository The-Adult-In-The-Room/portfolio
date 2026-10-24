import type { APIResponse, Locator, Page } from "@playwright/test";

export class SeoPage {
	constructor(private readonly page: Page) {}

	title(): Promise<string> {
		return this.page.title();
	}

	get faviconLink(): Locator {
		return this.page.locator('link[rel="icon"][href="/favicon.ico"]');
	}

	get svgFaviconLink(): Locator {
		return this.page.locator('link[rel="icon"][type="image/svg+xml"]');
	}

	get appleTouchIconLink(): Locator {
		return this.page.locator('link[rel="apple-touch-icon"]');
	}

	get manifestLink(): Locator {
		return this.page.locator('link[rel="manifest"]');
	}

	get metaDescription(): Locator {
		return this.page.locator('meta[name="description"]');
	}

	get themeColorMeta(): Locator {
		return this.page.locator('meta[name="theme-color"]');
	}

	get ogTitleMeta(): Locator {
		return this.page.locator('meta[property="og:title"]');
	}

	get ogDescriptionMeta(): Locator {
		return this.page.locator('meta[property="og:description"]');
	}

	get ogImageMeta(): Locator {
		return this.page.locator('meta[property="og:image"]');
	}

	get ogUrlMeta(): Locator {
		return this.page.locator('meta[property="og:url"]');
	}

	get ogTypeMeta(): Locator {
		return this.page.locator('meta[property="og:type"]');
	}

	get twitterCardMeta(): Locator {
		return this.page.locator('meta[name="twitter:card"]');
	}

	get twitterTitleMeta(): Locator {
		return this.page.locator('meta[name="twitter:title"]');
	}

	get twitterDescriptionMeta(): Locator {
		return this.page.locator('meta[name="twitter:description"]');
	}

	get twitterImageMeta(): Locator {
		return this.page.locator('meta[name="twitter:image"]');
	}

	get twitterUrlMeta(): Locator {
		return this.page.locator('meta[name="twitter:url"]');
	}

	async fetchFavicon(): Promise<APIResponse> {
		const href = await this.faviconLink.getAttribute("href");
		return this.page.request.get(href ?? "/favicon.ico");
	}

	async fetchOgImage(): Promise<APIResponse> {
		const content = await this.ogImageMeta.getAttribute("content");
		const path = content ? new URL(content).pathname : "/og-image.png";
		return this.page.request.get(path);
	}
}
