import { SingleArgumentFn } from '../utils/functions'
import { reduce } from './reduce'

export interface Pipe {
  <TInput1, TInput2, TReturn>(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TReturn>,
  ): (input: TInput1) => TReturn
  <TInput1, TInput2, TInput3, TReturn>(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TReturn>,
  ): (input: TInput1) => TReturn
  <TInput1, TInput2, TInput3, TInput4, TReturn>(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn4: SingleArgumentFn<TInput4, TReturn>,
  ): (input: TInput1) => TReturn
  <TInput1, TInput2, TInput3, TInput4, TInput5, TReturn>(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn4: SingleArgumentFn<TInput4, TInput4>,
    fn5: SingleArgumentFn<TInput5, TReturn>,
  ): (input: TInput1) => TReturn
  <TInput1, TInput2, TInput3, TInput4, TInput5, TInput6, TReturn>(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn6: SingleArgumentFn<TInput6, TReturn>,
  ): (input: TInput1) => TReturn
  <TInput1, TInput2, TInput3, TInput4, TInput5, TInput6, TInput7, TReturn>(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn7: SingleArgumentFn<TInput7, TReturn>,
  ): (input: TInput1) => TReturn
  <
    TInput1,
    TInput2,
    TInput3,
    TInput4,
    TInput5,
    TInput6,
    TInput7,
    TInput8,
    TReturn
  >(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn7: SingleArgumentFn<TInput7, TInput8>,
    fn8: SingleArgumentFn<TInput8, TReturn>,
  ): (input: TInput1) => TReturn
  <
    TInput1,
    TInput2,
    TInput3,
    TInput4,
    TInput5,
    TInput6,
    TInput7,
    TInput8,
    TInput9,
    TReturn
  >(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn7: SingleArgumentFn<TInput7, TInput8>,
    fn8: SingleArgumentFn<TInput8, TInput9>,
    fn9: SingleArgumentFn<TInput9, TReturn>,
  ): (input: TInput1) => TReturn
  <
    TInput1,
    TInput2,
    TInput3,
    TInput4,
    TInput5,
    TInput6,
    TInput7,
    TInput8,
    TInput9,
    TInput10,
    TReturn
  >(
    fn1: SingleArgumentFn<TInput1, TInput2>,
    fn2: SingleArgumentFn<TInput2, TInput3>,
    fn3: SingleArgumentFn<TInput3, TInput4>,
    fn4: SingleArgumentFn<TInput4, TInput5>,
    fn5: SingleArgumentFn<TInput5, TInput6>,
    fn6: SingleArgumentFn<TInput6, TInput7>,
    fn7: SingleArgumentFn<TInput7, TInput8>,
    fn8: SingleArgumentFn<TInput8, TInput9>,
    fn9: SingleArgumentFn<TInput9, TInput10>,
    fn10: SingleArgumentFn<TInput10, TReturn>,
  ): (input: TInput1) => TReturn
}
export const pipe: Pipe = (...pipeFns: Array<SingleArgumentFn<any, any>>) => (
  input: any,
) =>
  reduce(
    (prevValue: any, fn: SingleArgumentFn<any, any>) => fn(prevValue),
    input,
  )(pipeFns)
