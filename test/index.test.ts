import { expect, test } from 'vitest'
import defineESlintConfig from '../dist/index'

test('define', async () => {
  const configs = defineESlintConfig()

  expect(configs).toMatchSnapshot()
})
