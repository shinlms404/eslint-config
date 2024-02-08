import type { FlatESLintConfig } from 'eslint-define-config'
import { YAML } from '../files'
import { parserYaml, pluginYaml } from '../plugins'
import type { ConfigRules } from '../types'

export function yaml(): FlatESLintConfig[] {
  return [
    {
      files: [YAML],
      languageOptions: {
        parser: parserYaml
      },
      plugins: {
        yml: pluginYaml
      },
      rules: {
        ...(pluginYaml.configs.recommended.rules as ConfigRules),
        ...(pluginYaml.configs.standard.rules as ConfigRules),
        ...(pluginYaml.configs.prettier.rules as ConfigRules),

        'no-irregular-whitespace': 'off',
        'no-unused-vars': 'off',
        'spaced-comment': 'off'
      }
    }
  ]
}
