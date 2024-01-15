# @shinlms404/eslint-config

[![npm version](https://badge.fury.io/js/%40shinlms404%2Feslint-config.svg)](https://badge.fury.io/js/%40shinlms404%2Feslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a custom ESLint configuration preset designed by Charlie Chan. It provides a set of rules and configurations for ESLint to ensure consistent code quality.

## Installation

```bash
npm install --save-dev @shinlms404/eslint-config
```

## Usage

To use this ESLint configuration, add the following to your project's `eslint.config.js` file:

```js
import eslintConfigs from '@shinlms404/eslint-config'

export default eslintConfigs()
```

## Configuration

This ESLint configuration includes the following plugins and dependencies:

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-jsonc](https://www.npmjs.com/package/eslint-plugin-jsonc)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-sort-keys](https://www.npmjs.com/package/eslint-plugin-sort-keys)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports)
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)
- [eslint-processor-vue-blocks](https://www.npmjs.com/package/eslint-processor-vue-blocks)
- [jsonc-eslint-parser](https://www.npmjs.com/package/jsonc-eslint-parser)
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)

## Scripts

- `npm run lint`: Run ESLint to lint your code.
- `npm run lint:fix`: Run ESLint and automatically fix fixable issues.
- `npm test`: Run tests using Vitest.
- `npm run typecheck`: Run TypeScript type checking.
- `npm run watch`: Watch for changes and run ESLint accordingly.

## Contributing

Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Links

- [GitHub Repository](https://github.com/shinlms404/eslint-config)
- [npm Package](https://www.npmjs.com/package/@shinlms404/eslint-config)

---

Adjust the sections and content based on your specific needs and preferences.