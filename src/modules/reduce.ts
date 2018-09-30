export type Reducer<TAccumulator, TInputValue = TAccumulator> = (
  accumulator: TAccumulator,
  curr: TInputValue,
  index: number,
  array: TInputValue[],
) => TAccumulator

export const reduce = <TAccumulator, TInputValue = TAccumulator>(
  reducer: Reducer<TAccumulator, TInputValue>,
  initialValue: TAccumulator,
) => (values: TInputValue[]): TAccumulator =>
  values.reduce<TAccumulator>(reducer, initialValue)
