import { reduce } from './reduce'

export const flatMap = <T>(lists: T[][]) =>
  reduce<T[], T[]>((flatList: T[], list: T[]) => [...flatList, ...list], [])(
    lists,
  )
