export const map = <TInput, TReturn>(mapper: (value: TInput) => TReturn) => (
  array: TInput[],
): TReturn[] => array.map((val: TInput) => mapper(val))
