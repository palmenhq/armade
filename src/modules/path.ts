import { not } from './not'
import { isNil } from './isNil'

export interface PathObject {
  [stringKey: string]: any
  [numberKey: number]: any
}
export type PathKey<TObject> = string | number | keyof TObject

export interface Path {
  <TObject extends PathObject, K1 extends PathKey<TObject>>(pathArray: [K1]): (
    object: TObject,
  ) => TObject[K1]
  <
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>
  >(
    pathArray: [K1, K2],
  ): (object: TObject) => TObject[K1][K2]
  <
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>
  >(
    pathArray: [K1, K2, K3],
  ): (object: TObject) => TObject[K1][K2][K3]
  <
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>
  >(
    pathArray: [K1, K2, K3, K4],
  ): (object: TObject) => TObject[K1][K2][K3][K4]
  <
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>
  >(
    pathArray: [K1, K2, K3, K4, K5],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5]
  <
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4][K6]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>
  >(
    pathArray: [K1, K2, K3, K4, K5, K6],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6]
  <
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>
  >(
    pathArray: [K1, K2, K3, K4, K5, K6],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6]
  <
    TObject extends PathObject,
    K1 extends PathKey<TObject>,
    K2 extends PathKey<TObject[K1]>,
    K3 extends PathKey<TObject[K1][K2]>,
    K4 extends PathKey<TObject[K1][K2][K3]>,
    K5 extends PathKey<TObject[K1][K2][K3][K4]>,
    K6 extends PathKey<TObject[K1][K2][K3][K4][K5]>,
    K7 extends PathKey<TObject[K1][K2][K3][K4][K5][K6]>
  >(
    pathArray: [K1, K2, K3, K4, K5, K6, K7],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6][K7]
  <
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
    pathArray: [K1, K2, K3, K4, K5, K6, K7, K8],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6][K7][K8]
  <
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
    pathArray: [K1, K2, K3, K4, K5, K6, K7, K8, K9],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6][K7][K8][K9]
  <
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
    pathArray: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10],
  ): (object: TObject) => TObject[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]
}

export const path: Path = (pathArray: Array<string | number>) => (
  object: any,
) =>
  pathArray.reduce((previousValue, currentPathKey) => {
    if (
      not(isNil(previousValue)) &&
      not(isNil(previousValue[currentPathKey]))
    ) {
      return previousValue[currentPathKey]
    }

    return undefined
  }, object)
