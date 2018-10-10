import { PathKey, PathObject } from './path'
import { isNil } from './isNil'
import { not } from './not'

export interface PathOr {
  <TAlternative, TObject extends PathObject, K1 extends PathKey<TObject>>(
    alternative: TAlternative,
    pathArray: [K1],
  ): (object: TObject) => TObject[K1] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2],
  ): (object: TObject) => TObject[K1][K2] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3],
  ): (object: TObject) => TObject[K1][K2][K3] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4],
  ): (object: TObject) => TObject[K1][K2][K3][K4] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4, K5],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4][K6]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4, K5, K6],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4, K5, K6],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>,
    K7 extends PathKey<TObject[K1][K2][K3][K4][K5][K6]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4, K5, K6, K7],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6][K7] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>,
    K7 extends PathKey<TObject[K1][K2][K3][K4][K5][K6]>,
    K8 extends PathKey<TObject[K1][K2][K3][K4][K5][K6][K7]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4, K5, K6, K7, K8],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6][K7][K8] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>,
    K7 extends PathKey<TObject[K1][K2][K3][K4][K5][K6]>,
    K8 extends PathKey<TObject[K1][K2][K3][K4][K5][K6][K7]>,
    K9 extends PathKey<TObject[K1][K2][K3][K4][K5][K6][K7][K8]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4, K5, K6, K7, K8, K9],
  ): (
    object: TObject,
  ) => TObject[K1][K2][K3][K4][K5][K6][K7][K8][K9] | TAlternative
  <
    TAlternative,
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>,
    K7 extends PathKey<TObject[K1][K2][K3][K4][K5][K6]>,
    K8 extends PathKey<TObject[K1][K2][K3][K4][K5][K6][K7]>,
    K9 extends PathKey<TObject[K1][K2][K3][K4][K5][K6][K7][K8]>,
    K10 extends PathKey<TObject[K1][K2][K3][K4][K5][K6][K7][K8][K9]>
  >(
    alternative: TAlternative,
    pathArray: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10],
  ): (
    object: TObject,
  ) => TObject[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10] | TAlternative
}

const KEY_MISSING = {}

export const pathOr: PathOr = (alternative: any, pathArray: any[]) => (
  object: any,
) => {
  const result = pathArray.reduce((currentValue, pathKey) => {
    if (currentValue === KEY_MISSING) {
      return KEY_MISSING
    }

    if (not(isNil(currentValue)) && not(isNil(currentValue[pathKey]))) {
      return currentValue[pathKey]
    }

    return KEY_MISSING
  }, object)

  if (result === KEY_MISSING) {
    return alternative
  }

  return result
}
