import { identity } from './identity'

it('returns itself', () => {
  const thing = {}
  expect(identity(thing)).toBe(thing)
})
