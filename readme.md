# React TypeScript Amazon Cognito Authentication

![Continuous Integration](https://github.com/louis-young/react-typescript-amazon-cognito-authentication/actions/workflows/ci.yml/badge.svg)
![Continuous Deployment](https://github.com/louis-young/react-typescript-amazon-cognito-authentication/actions/workflows/cd.yml/badge.svg)

A React and TypeScript application with Amazon Cognito authentication.

- React with TypeScript to improve developer experience, shorten feedback loops and to help prevent runtime errors.
- Tailwind to style elements quickly and efficiently.
- Linting for JavaScript and TypeScript files via ESLint to find and fix problems quickly via static code analysis.
- Linting for the filesystem via LSLint to enforce consistency in file and folder names.
- Opinionated formatting for an array of file types via Prettier to enforce consistency.
- Pre-commit hooks via Husk
- Automated dependency updates via Dependabot to keep dependencies up to date.
- Continuous Integration via GitHub actions with type checking, formatting, linting and testing.
- Continuous Deployment via GitHub actions to Amazon S3, in this example to an S3 bucket distributed by a CloudFront distribution.

## Scripts

`npm run start`

Runs the application in the development mode.

`npm run typecheck`

Runs the TypeScript compiler and checks for type issues.

`npm run lint`

Runs the linter to check for code issues.

`npm run lint:write`

Runs the linter and fixes code issues.

`npm run lint:ls`

Runs the filesystem linter to check for consistency in file and folder names.

`npm run format`

Runs the formatter to check for formatting issues.

`npm run format:write`

Runs the formatter and fixes formatting issues.

`npm run build`

Builds the application using the production environment variables and outputs it to the `dist` folder.
