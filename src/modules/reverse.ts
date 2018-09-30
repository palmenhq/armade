import { identity } from './identity'

export const reverse = <TInput>(array: TInput[]) =>
  array.map(identity).reverse()
