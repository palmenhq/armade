import { SingleArgumentFn } from '../utils/functions'
import { includes } from './includes'
import { map } from './map'
import { pipe } from './pipe'

export const anyPass = <T>(tests: Array<SingleArgumentFn<T, boolean>>) => (
  subject: T,
): boolean =>
  pipe<Array<SingleArgumentFn<any, boolean>>, boolean[], boolean>(
    map<SingleArgumentFn<any, boolean>, boolean>((test) => test(subject)),
    includes(true),
  )(tests)
