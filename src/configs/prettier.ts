import type { FlatESLintConfig } from 'eslint-define-config'
import { configPrettier, pluginPrettier } from '../plugins'
import type { ConfigRules } from '../types'

export function prettier(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...(configPrettier.rules as ConfigRules),

        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'prettier/prettier': 'warn'
      }
    }
  ]
}
