import { always } from './always'

it('always returns thing', () => {
  const thing = {}
  expect(always(thing)()).toBe(thing)
})
