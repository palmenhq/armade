import { propOr } from './propOr'

it('gets property', () => {
  const obj = {
    foo: 'bar',
    baz: 'qux',
  }

  expect(propOr('_', 'foo')(obj)).toBe('bar')
})

it('gets alternative', () => {
  const obj = {
    foo: 'bar',
  }

  expect(propOr('baz', 'nope')(obj)).toBe('baz')
})

it('works with arrays', () => {
  const obj = [1, 2, 3]
  expect(propOr(1337, 42)(obj)).toBe(1337)

  const obj2 = [1, 2, 3]
  expect(propOr(1337, 2)(obj2)).toBe(3)
})

it('works with different data types', () => {
  const obj = [1]
  expect(propOr('foo', 1)(obj)).toBe('foo')
})
