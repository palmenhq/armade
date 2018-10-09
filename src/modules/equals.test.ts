import { equals } from './equals'

it('checks if 2 strings are equal', () => {
  const a = 'a'
  const b = 'b'
  expect(equals(a)(b)).toBe(false)
  expect(equals(a)(a)).toBe(true)
})

it('checks if 2 arrays are equal', () => {
  const a = ['a', 'b', 'c']
  const a2 = ['a', 'b', 'c']
  const b = ['a', 'b']
  expect(equals(a)(b)).toBe(false)
  expect(equals(a)(a2)).toBe(true)
})

it('checks if 2 objects are deep equal', () => {
  const a = { foo: 'bar', baz: { qux: 'quux' } }
  const a2 = { foo: 'bar', baz: { qux: 'quux' } }
  const b = { foo: 'bar', baz: { qux: 'not quux' } }
  expect(equals(a)(b)).toBe(false)
  expect(equals(a)(a2)).toBe(true)
})
