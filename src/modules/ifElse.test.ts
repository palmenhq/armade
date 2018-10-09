import { always } from './always'
import { ifElse } from './ifElse'

it('runs true conditional statement', () => {
  const trueCondition = always(true)
  const trueBranch = jest.fn()
  const falseBranch = jest.fn()
  trueBranch.mockReturnValue('yay')
  expect(
    ifElse<void, string>(trueCondition, trueBranch, falseBranch)(undefined),
  ).toBe('yay')
  expect(trueBranch).toHaveBeenCalled()
  expect(falseBranch).not.toHaveBeenCalled()
})

it('runs false conditional statement', () => {
  const trueCondition = always(false)
  const trueBranch = jest.fn()
  const falseBranch = jest.fn()
  falseBranch.mockReturnValue('noo')
  expect(
    ifElse<void, string>(trueCondition, trueBranch, falseBranch)(undefined),
  ).toBe('noo')
  expect(trueBranch).not.toHaveBeenCalled()
  expect(falseBranch).toHaveBeenCalled()
})
