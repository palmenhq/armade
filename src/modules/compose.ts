import { SingleArgumentFn } from '../utils/functions'
import { reduce } from './reduce'
import { reverse } from './reverse'

export interface Compose {
  <TReturn, TInput2, TInput1>(
    fn2: SingleArgumentFn<TInput2, TReturn>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <TReturn, TInput3, TInput2, TInput1>(
    fn3: SingleArgumentFn<TInput3, TReturn>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <TReturn, TInput4, TInput3, TInput2, TInput1>(
    fn4: SingleArgumentFn<TInput4, TReturn>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <TReturn, TInput4, TInput3, TInput2, TInput1>(
    fn4: SingleArgumentFn<TInput4, TReturn>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <TReturn, TInput5, TInput4, TInput3, TInput2, TInput1>(
    fn5: SingleArgumentFn<TInput5, TReturn>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <TReturn, TInput6, TInput5, TInput4, TInput3, TInput2, TInput1>(
    fn6: SingleArgumentFn<TInput6, TReturn>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <TReturn, TInput6, TInput5, TInput4, TInput3, TInput2, TInput1>(
    fn6: SingleArgumentFn<TInput6, TReturn>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <TReturn, TInput7, TInput6, TInput5, TInput4, TInput3, TInput2, TInput1>(
    fn7: SingleArgumentFn<TInput7, TReturn>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <
    TReturn,
    TInput8,
    TInput7,
    TInput6,
    TInput5,
    TInput4,
    TInput3,
    TInput2,
    TInput1
  >(
    fn8: SingleArgumentFn<TInput8, TReturn>,
    fn7: SingleArgumentFn<TInput7, TInput8>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <
    TReturn,
    TInput9,
    TInput8,
    TInput7,
    TInput6,
    TInput5,
    TInput4,
    TInput3,
    TInput2,
    TInput1
  >(
    fn9: SingleArgumentFn<TInput9, TReturn>,
    fn8: SingleArgumentFn<TInput8, TInput9>,
    fn7: SingleArgumentFn<TInput7, TInput8>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
  <
    TReturn,
    TInput10,
    TInput9,
    TInput8,
    TInput7,
    TInput6,
    TInput5,
    TInput4,
    TInput3,
    TInput2,
    TInput1
  >(
    fn10: SingleArgumentFn<TInput10, TReturn>,
    fn9: SingleArgumentFn<TInput9, TInput10>,
    fn8: SingleArgumentFn<TInput8, TInput9>,
    fn7: SingleArgumentFn<TInput7, TInput8>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn1: SingleArgumentFn<TInput1, TInput2>,
  ): (input: TInput1) => TReturn
}
export const compose: Compose = (
  ...composeFns: Array<SingleArgumentFn<any, any>>
) => (input: any) =>
  reduce(
    (prevValue: any, fn: SingleArgumentFn<any, any>) => fn(prevValue),
    input,
  )(reverse(composeFns))
