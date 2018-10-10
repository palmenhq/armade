import { pathOr } from './pathOr'

it('gets a path', () => {
  const obj = {
    foo: {
      bar: {
        [0]: {
          baz: 'it works',
        },
      },
    },
  }
  const result = pathOr('nope', ['foo', 'bar', 0, 'baz'])(obj)

  expect(result).toBe('it works')
})

it("gets path alternative when prop doesn't exist", () => {
  const obj = {}

  const result = pathOr('expected', ['foo', 'bar'])(obj)

  expect(result).toBe('expected')
})

it('gets alternative when prop is undefined', () => {
  const obj = { foo: undefined }
  const result = pathOr('bar', ['foo'])(obj)
  expect(result).toBe('bar')
})
