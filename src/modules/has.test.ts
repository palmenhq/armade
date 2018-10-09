import { has } from './has'

it('finds keys in objects', () => {
  expect(has('foo')({ foo: 'bar', baz: 'qux' })).toBe(true)
  expect(has('foo')({})).toBe(false)
})
