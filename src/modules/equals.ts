import { allPass } from './allPass'
import { always } from './always'
import { and } from './and'
import { anyPass } from './anyPass'
import { ifElse } from './ifElse'
import { isArray } from './isArray'
import { isObject } from './isObject'
import { keys } from './keys'
import { map } from './map'
import { pipe } from './pipe'

const singleArrayPass = (comparison: any[]) => (reference: any[]) =>
  pipe(
    map<any, any>((item, index) => equals(reference[index])(item)),
    map(always),
    (things) => allPass<void>(things)(undefined),
  )(comparison)
const arrayPass = (comparison: any[]) => (reference: any[]) =>
  and(
    singleArrayPass(reference)(comparison),
    singleArrayPass(comparison)(reference),
  )

const objectPass = (reference: any) => (comparison: any) =>
  pipe(
    keys,
    map((key) =>
      equals<any, any>((reference as any)[key])((comparison as any)[key]),
    ),
    map(always),
    (things) => allPass<void>(things)(undefined),
  )(reference)

export const equals = <TReference, TComparison = TReference>(
  reference: TReference,
) => (comparison: TComparison): boolean =>
  anyPass<TComparison>([
    always(reference === (comparison as unknown)),
    ifElse<unknown, Array<unknown>, unknown, boolean>(
      always(and(isArray(comparison), isArray(reference))),
      arrayPass(reference as any),
      always(false),
    ),
    ifElse<unknown, any, unknown, boolean>(
      always(and(isObject(comparison), isObject(reference))),
      objectPass(reference),
      always(false),
    ),
  ])(comparison)
