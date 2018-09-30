import { self } from './self'

export const reverse = <TInput>(array: TInput[]) => array.map(self).reverse()
