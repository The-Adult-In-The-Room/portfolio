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

Unit tests run with `happy-dom` and enforce reasonable coverage thresholds on the included source tree. Playwright suites build the app and run against the production preview server.

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
