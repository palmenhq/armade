import { SingleArgumentFn } from '../utils/functions'
import { includes } from './includes'
import { map } from './map'
import { not } from './not'
import { pipe } from './pipe'

export const allPass = <T>(tests: Array<SingleArgumentFn<T, boolean>>) => (
  subject: T,
): boolean =>
  pipe<Array<SingleArgumentFn<T, boolean>>, boolean[], boolean, boolean>(
    map((test) => test(subject)),
    includes(false),
    not,
  )(tests)
