import type { FlatESLintConfig } from 'eslint-define-config'
import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  prettier,
  sortKey,
  typescript,
  vue,
  yaml
} from './configs/index'
import type { AwaitAble } from './types'
import { flat } from './utils'

export async function defineESlintConfig(): Promise<FlatESLintConfig[]> {
  const configs: AwaitAble<FlatESLintConfig[]>[] = []

  configs.push(
    ignores(),
    imports(),
    comments(),
    jsonc(),
    sortKey(),
    javascript(),
    typescript(),
    vue(),
    yaml(),
    prettier() //Must be at the end of the array
  )

  const flatConfigs = await flat(...configs)

  return flatConfigs
}

export async function eslintConfigs(): Promise<FlatESLintConfig[]> {
  return await defineESlintConfig()
}
