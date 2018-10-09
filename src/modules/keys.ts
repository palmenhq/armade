import { ifElse } from './ifElse'
import { isArray } from './isArray'

interface Keys {
  (thing: any[]): number[]
  (thing: {}): string[]
}
export const keys: Keys = ifElse<
  {} | any[],
  string[],
  number[],
  number[],
  string[]
>(isArray, (array: any[]) => Array.from(array.keys()), Object.keys) as Keys
