import { append } from './append'

it('appends something', () => {
  expect(append('c')(['a', 'b'])).toEqual(['a', 'b', 'c'])
})
