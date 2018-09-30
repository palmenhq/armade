import { compose } from './compose'

it('composes 2 functions of different types', () => {
  const fn1 = (input: number) => input * input
  const fn2 = (input: number) => String(input)

  expect(
    compose(
      fn2,
      fn1,
    )(3),
  ).toBe('9')
})

it('composes 3 functions of different types', () => {
  const fn1 = (input: number) => input * input
  const fn2 = (input: number) => String(input)
  const fn3 = (input: string) => ({ input })
  expect(
    compose(
      fn3,
      fn2,
      fn1,
    )(3),
  ).toEqual({ input: '9' })
})
