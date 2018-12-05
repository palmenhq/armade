import { isNil } from './isNil'
import { not } from './not'
import { prop } from './prop'

export const propOr = <
  TObject extends {
    [stringKey: string]: any
    [numberKey: number]: any
  },
  TAlternative,
  K extends string | number | keyof TObject
>(
  alternative: TAlternative,
  key: K,
) => (obj: TObject): TObject[K] | TAlternative => {
  if (not(isNil(obj)) && isNil(obj[key])) {
    return alternative
  }

  return prop<TObject, K>(key)(obj)!
}
