import { self } from './self'

it('returns itself', () => {
  const thing = {}
  expect(self(thing)).toBe(thing)
})
