import { isNil } from './isNil'
import { not } from './not'

export const prop = <
  TObject extends {
    [stringKey: string]: any
    [numberKey: number]: any
  },
  K extends string | number | keyof TObject
>(
  key: K,
) => (obj: TObject): TObject[K] | undefined => {
  if (not(isNil(obj))) {
    return obj[key]
  }

  return undefined
}
