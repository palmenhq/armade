import { anyPass } from './anyPass'

it('checks if any tester passes', () => {
  const isFoo = (thing: string) => thing === 'foo'
  const isString = (thing: any) => typeof thing === 'string'

  expect(anyPass<any>([isFoo, isString])(0)).toBe(false)
  expect(anyPass([isFoo, isString])('not foo')).toBe(true)
  expect(anyPass([isFoo, isString])('foo')).toBe(true)
})
