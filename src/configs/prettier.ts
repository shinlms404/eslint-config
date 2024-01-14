import type { FlatESLintConfig } from 'eslint-define-config'
import { configPrettier, pluginPrettier } from '../plugins'

export function prettier(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...configPrettier.rules,

        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'prettier/prettier': 'warn'
      }
    }
  ]
}
