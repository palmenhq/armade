import { keys } from './keys'

it('finds object keys', () => {
  const result = keys({ foo: 'bar', baz: 'qux' })
  expect(result).toEqual(['foo', 'baz'])
})

it('finds array keys', () => {
  const result = keys(['foo', 'bar'])
  expect(result).toEqual([0, 1])
})
