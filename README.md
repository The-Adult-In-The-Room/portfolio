# Portfolio

Personal portfolio site built with [TanStack Start](https://tanstack.com/start), React 19, TypeScript, and Tailwind CSS v4.

## Development

Requires Node.js >= 24.

```bash
npm install
npm run dev    # Start the dev server at http://localhost:3000
```

## Building for Production

```bash
npm run build
```

## Testing Strategy

This project follows **Acceptance Test Driven Development (ATDD)** and **Behavior Driven Development (BDD)**. Specifications are written as executable behaviors using Gherkin-style language so that tests read like requirements and failures point directly to broken behavior.

- **Unit tests** use `GIVEN ...` describe blocks and `THEN ...` test names to specify isolated behaviors of components, utilities, and helpers.
- **E2E tests** use `GIVEN ...` describe blocks and `WHEN ... THEN ...` test names. Multi-step acceptance tests are further broken down with Playwright's `test.step` so the report shows each Given / When / Then boundary.

### Test Layers

| Suite | Runner | Scope | Command |
| --- | --- | --- | --- |
| Unit | Vitest + React Testing Library | Components, utilities, UI variants | `npm run test:ci` |
| Acceptance | Playwright | Full happy paths: navigation, theme toggle, project filtering | `npm run test:e2e:acceptance` |
| Smoke | Playwright | App loads, pages render, no runtime errors | `npm run test:e2e:smoke` |
| Regression | Playwright | Deployed-environment checks: external links are safe and reachable | `npm run test:e2e:regression` |
| Lighthouse | Lighthouse CI | Performance, accessibility, best practices, SEO | `npm run lighthouse` |

Unit tests run with `happy-dom` and enforce 95% coverage thresholds on the included source tree. The acceptance suite builds the app and runs against the production preview server. The smoke and regression suites run against a deployed environment — set `SMOKE_BASE_URL` or `REGRESSION_BASE_URL` to the target URL before running them.

### Lighthouse Audits

Lighthouse CI audits the production build for every route using mobile emulation.

```bash
npm run lighthouse     # Build, then audit every route
npx lhci autorun       # Audit an existing build without rebuilding
```

A local Chrome or Chromium installation is required. Reports are written to `.lighthouseci/`, and shareable report URLs are printed at the end of the run.

#### Scores

Median of 3 runs per route against the local production build (`npm run start`), last measured on 18 November 2026.

| Route | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| `/` | 100 | 100 | 100 | 100 |
| `/about` | 100 | 100 | 100 | 100 |
| `/projects` | 100 | 100 | 100 | 100 |

These are local numbers, not deployed-environment guarantees.

#### Thresholds

Minimum category thresholds are defined in `lighthouserc.yml`. It currently requires a perfect score in every category:

| Category | Minimum |
| --- | --- |
| Performance | 1.00 |
| Accessibility | 1.00 |
| Best Practices | 1.00 |
| SEO | 1.00 |

Because the gate requires a perfect score, any regression in any category fails the audit.

### Page Object Model

All Playwright specs use a Page Object Model (POM) layer via `e2e/fixtures/test`:

- Page objects live in `e2e/pages/` and encapsulate selectors and common interactions.
- Specs import `test` and `expect` from `../fixtures/test` and destructure the POMs they need (`homePage`, `projectsPage`, `aboutPage`, `navigation`, `themeToggle`).
- Direct locator calls such as `page.getByTestId`, `page.getByLabel`, and `page.getByRole` belong inside page objects, not in spec files.

## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting.

```bash
npm run lint      # Check formatting and lint
npm run fix       # Auto-fix issues
```

The repo uses tab indentation and double quotes.

## Verification

Run the full pipeline before finishing work:

```bash
npm run verify
```

This runs TypeScript type-checking, Biome lint/format, and unit tests.

## Deployment

This project ships with `nixpacks.toml` configured for Node.js 24 so Railway detects the build automatically.

## License

MIT
