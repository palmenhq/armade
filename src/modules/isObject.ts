import { isArray } from './isArray'
import { not } from './not'

export const isObject = (thing: any) =>
  not(isArray(thing)) && typeof thing === 'object'
