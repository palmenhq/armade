import { path } from './path'

it('gets a long path', () => {
  const obj = {
    foo: {
      bar: {
        baz: {
          [0]: {
            qux: {
              [1]: 'it works',
            },
          },
        },
      },
    },
  }

  const result = path(['foo', 'bar', 'baz', 0, 'qux', 1])(obj)
  expect(result).toBe('it works')
})

it("doesn't 💥 when trying to get a path of undefined", () => {
  const obj = { foo: { bar: undefined } }

  expect(path(['foo', 'bar', 'ba'])(obj)).toBe(undefined)
})

it("doesn't 💥 when trying to get path of a non-object", () => {
  const notAnObj = { foo: 'hello' }
  expect(path(['foo', 'bar'])(notAnObj)).toBe(undefined)
})
