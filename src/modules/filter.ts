export const filter = <TInput>(
  filterer: (input: TInput, index: number, array: TInput[]) => boolean,
) => (array: TInput[]): TInput[] => array.filter(filterer)
