import type { Rules } from 'eslint-define-config'

export type AwaitAble<T> = T | Promise<T>

export type ConfigRules = Partial<Rules>

export type InteropDefault<T> = T extends { default: infer U } ? U : T
