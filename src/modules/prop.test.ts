import { prop } from './prop'

it('gets a prop that exists', () => {
  const object = {
    foo: 'bar',
    baz: 'qux',
  }
  const result = prop('foo')(object)
  expect(result).toBe('bar')
})

it("receives undefined if trying to access prop that doesn't exist", () => {
  const object = {}

  const result = prop('foo')(object)
  expect(result).toBe(undefined)
})

it("doesn't explode if object input isnt an object", () => {
  const notObject = undefined

  expect(prop('foo')((notObject as unknown) as {})).toBe(undefined)
})

it('works on arrays', () => {
  const obj = ['foo', 'bar', 'baz']

  expect(prop(0)(obj)).toBe('foo')
})

it('gets prop from non-object', () => {
  expect(prop('length')('foo')).toBe(3)
})
