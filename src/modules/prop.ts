export const prop = <
  TObject extends {
    [stringKey: string]: any
    [numberKey: number]: any
  },
  K extends string | number | keyof TObject
>(
  key: K,
) => (obj: TObject): TObject[K] => {
  if (obj !== undefined && obj !== null && typeof obj === 'object') {
    return obj[key]
  }

  return undefined
}
