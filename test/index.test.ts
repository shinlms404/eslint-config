import { expect, test } from 'vitest'
import defineESlintConfig from '../dist/index'
import { getVueVersion } from '../src/utils'

test('define', async () => {
  const configs = defineESlintConfig()

  expect(configs).toMatchSnapshot()
})

test('vueVersion', async () => {
  const vueVersion = getVueVersion()

  expect(vueVersion).toBe(3)
})
