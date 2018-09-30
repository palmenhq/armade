export const map = <TInput, TReturn>(
  mapper: (value: TInput, index: number, array: TInput[]) => TReturn,
) => (array: TInput[]): TReturn[] => array.map(mapper)
