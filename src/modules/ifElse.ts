export const ifElse = <
  T,
  TIfTrue = T,
  TIfFalse = TIfTrue,
  TReturnTrue = TIfTrue,
  TReturnFalse = TReturnTrue
>(
  condition: (input: T) => boolean,
  ifTrue: (input: TIfTrue) => TReturnTrue,
  ifFalse: (input: TIfFalse) => TReturnFalse,
) => (input: T): TReturnTrue | TReturnFalse => {
  if (condition(input)) {
    return ifTrue((input as unknown) as TIfTrue)
  }
  return ifFalse((input as unknown) as TIfFalse)
}
