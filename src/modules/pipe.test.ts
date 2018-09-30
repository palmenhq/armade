import { pipe } from './pipe'

it('pipes 2 functions of different types', () => {
  const fn1 = (input: number) => input * input
  const fn2 = (input: number) => String(input)

  expect(
    pipe(
      fn1,
      fn2,
    )(3),
  ).toBe('9')
})

it('pipes 3 functions of different types', () => {
  const fn1 = (input: number) => input * input
  const fn2 = (input: number) => String(input)
  const fn3 = (input: string) => ({ input })
  expect(
    pipe(
      fn1,
      fn2,
      fn3,
    )(3),
  ).toEqual({ input: '9' })
})
