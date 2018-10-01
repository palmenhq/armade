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
  if (typeof obj !== 'object') {
    return alternative
  }

  if (!obj.hasOwnProperty(key)) {
    return alternative
  }

  return prop<TObject, K>(key)(obj)
}
