# React TypeScript Tooling Automation Template

![Continuous Integration](https://github.com/louis-young/react-typescript-tooling-automation-template/actions/workflows/ci.yml/badge.svg)
![Continuous Deployment](https://github.com/louis-young/react-typescript-tooling-automation-template/actions/workflows/cd.yml/badge.svg)

A React template with TypeScript and developer tooling.

- React with TypeScript with strong typing via static code analysis to improve developer experience and shorten feedback loops.
- Tailwind to increase styling velocity and manage CSS at scale.
- Unit and integration tests with coverage reports and configurable thresholds via Jest to help prevent regressions and increase confidence, with React Testing Library to help prevent testing implementation details.
- Linting for JavaScript and TypeScript files via ESLint to find and fix problems quickly via static code analysis, with configurable rules.
- Linting for the filesystem via LSLint to enforce consistency in file and folder names, with configurable rules.
- Opinionated formatting for an array of file types via Prettier to enforce consistency in code style, with configurable rules.
- Pre-commit hooks via Husky to automatically enforce standards and shorten feedback loops, with configurable steps.
- Automated dependency updates via Dependabot to keep dependencies secure and up to date, with configurable rules.
- Continuous Integration via GitHub actions with type checking, formatting, linting, testing and more, with configurable steps.
- Continuous Deployment via GitHub actions to Amazon S3, in my instance to an S3 bucket behind a CloudFront distribution through Route 53.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the application in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run typecheck`

Runs the TypeScript compiler and checks for type issues.

### `npm run lint`

Runs the linter to check for code issues.

### `npm run lint:write`

Runs the linter and fixes code issues.

### `npm run lint:ls`

Runs the filesystem linter to check for consistency in file and folder names.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm test:coverage`

Launches the test runner in the interactive watch mode and outputs coverage information and a coverage report.

### `npm run format`

Runs the formatter to check for formatting issues.

### `npm run format:write`

Runs the formatter and fixes formatting issues.

### `npm run build:development`

Builds the application for using the development environment variables and outputs it to the `build` folder.

### `npm run build:production`

Builds the application for using the production environment variables and outputs it to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
