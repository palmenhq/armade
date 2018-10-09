import { includes } from './includes'
import { keys } from './keys'
import { pipe } from './pipe'

export const has = (key: string) =>
  pipe<{}, string[], boolean>(
    keys,
    includes(key),
  )
