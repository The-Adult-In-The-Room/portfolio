import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

describe("GIVEN the ThemeToggle component", () => {
	let storage: Record<string, string> = {};
	let listeners: Array<(event: MediaQueryListEvent) => void> = [];

	beforeEach(() => {
		storage = {};
		listeners = [];

		vi.stubGlobal("localStorage", {
			getItem: vi.fn((key: string) => storage[key] ?? null),
			setItem: vi.fn((key: string, value: string) => {
				storage[key] = value;
			}),
		});

		vi.stubGlobal("matchMedia", (query: string) => ({
			matches: false,
			media: query,
			onchange: null,
			addEventListener: vi.fn((event: string, listener: () => void) => {
				if (event === "change") listeners.push(listener);
			}),
			removeEventListener: vi.fn((event: string, listener: () => void) => {
				if (event === "change") {
					listeners = listeners.filter((l) => l !== listener);
				}
			}),
			dispatchEvent: vi.fn(),
		}));

		document.documentElement.className = "";
		document.documentElement.removeAttribute("data-theme");
		document.documentElement.style.colorScheme = "";
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	test("THEN it initializes from localStorage", () => {
		storage.theme = "dark";
		render(<ThemeToggle />);
		expect(screen.getByRole("button")).toHaveTextContent("Dark");
	});

	test("THEN it defaults to auto when no theme is stored", () => {
		render(<ThemeToggle />);
		expect(screen.getByRole("button")).toHaveTextContent("Auto");
	});

	test("THEN it cycles through modes on click", () => {
		render(<ThemeToggle />);
		const button = screen.getByRole("button");

		fireEvent.click(button);
		expect(button).toHaveTextContent("Light");
		expect(storage.theme).toBe("light");

		fireEvent.click(button);
		expect(button).toHaveTextContent("Dark");
		expect(storage.theme).toBe("dark");

		fireEvent.click(button);
		expect(button).toHaveTextContent("Auto");
		expect(storage.theme).toBe("auto");
	});

	test("THEN it applies the theme to the document element", () => {
		render(<ThemeToggle />);
		const button = screen.getByRole("button");

		fireEvent.click(button);
		expect(document.documentElement.classList.contains("light")).toBe(true);
		expect(document.documentElement.getAttribute("data-theme")).toBe("light");
	});

	test("THEN it listens to system theme changes in auto mode", () => {
		render(<ThemeToggle />);
		expect(listeners.length).toBe(1);
	});

	test("THEN it removes the system theme listener on unmount", () => {
		const { unmount } = render(<ThemeToggle />);
		unmount();
		expect(listeners.length).toBe(0);
	});
});

describe("GIVEN getInitialMode in a server environment", () => {
	test("THEN it returns auto when window is undefined", async () => {
		const originalWindow = window;
		// @ts-expect-error simulating a server environment where window is undefined
		vi.stubGlobal("window", undefined);

		const { getInitialMode } = await import("./ThemeToggle");
		expect(getInitialMode()).toBe("auto");

		vi.stubGlobal("window", originalWindow);
	});
});
