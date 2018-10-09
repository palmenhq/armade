import { allPass } from './allPass'

it("returns true when all functions pass and false when some functions don't", () => {
  const isFoo = (thing: string) => thing === 'foo'
  const isString = (thing: any) => typeof thing === 'string'

  expect(allPass([isFoo, isString])('foo')).toBe(true)
  expect(allPass([isFoo, isString])('bar')).toBe(false)
})
