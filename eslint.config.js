import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { eslintConfigs } = require('./src/index.ts')

export default eslintConfigs()
