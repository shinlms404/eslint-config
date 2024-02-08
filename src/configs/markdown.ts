import type { FlatESLintConfig } from 'eslint-define-config'
import { MARKDOWN } from '../files'
import { pluginMd } from '../plugins'

export function markdown(): FlatESLintConfig[] {
  return [
    {
      files: [MARKDOWN],
      processor: pluginMd.processors.markdown,
      plugins: {
        markdown: pluginMd
      }
    }
  ]
}
