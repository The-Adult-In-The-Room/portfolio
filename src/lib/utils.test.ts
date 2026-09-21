import { cn } from "./utils";

describe("GIVEN the cn utility", () => {
	test("THEN it merges a single class string", () => {
		expect(cn("foo")).toBe("foo");
	});

	test("THEN it merges conditional classes", () => {
		expect(cn("foo", true && "bar", false && "baz")).toBe("foo bar");
	});

	test("THEN it resolves Tailwind conflicts", () => {
		expect(cn("px-2", "px-4")).toBe("px-4");
	});

	test("THEN it returns an empty string when given no inputs", () => {
		expect(cn()).toBe("");
	});
});
